import React, { useState, useRef } from "react";
import { validateUser } from "../utils/validation";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const [passwordError, setpasswordError] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const alreadyAUser = useSelector( (store)=>store.user  )
  if(alreadyAUser) navigate("/browse")

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglesignIn = () => {
    setsignIn(!signIn);
  };


  


  const clicked = () => {
    const message = validateUser(email.current.value, password.current.value);
    seterrorMessage(message)
    if (message) return;




    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse")
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
        });
    }
    if (signIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse")
          // console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrorMessage(errorMessage);
          togglesignIn();
        });
    }
  
  };

  return (
    <div className="w-full h-screen max-sm:bg-black sm:bg-[url('https://media.istockphoto.com/id/1417034744/vector/seamless-topographic-contour-lines.jpg?s=612x612&w=0&k=20&c=cL-krxAVZrKUstGcglYF9x6PhI7SEf0Ung__2QKeizk=')]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col p-14 max-sm:p-6 bg-black absolute z-50 m-auto top-0 bottom-0 right-0 left-0 h-3/4 w-96 text-white rounded-lg bg-opacity-[20%] backdrop-blur-[3px] max-sm:w-full max-sm:h-full max-sm:z-0 max-sm:py-28"
      >
        <h1 className="font-sans font-semibold text-4xl my-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-3 my-2 text-sm bg-[#333333] rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-2 text-sm bg-[#333333] rounded z-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 text-sm bg-[#333333] rounded"
        />
        <p className="text-xs font-semibold text-red-600">{errorMessage}</p>
        <div onClick={clicked} className="my-3">
          <AwesomeButton type="danger" className="w-full">
            {signIn ? "Sign In " : "Sign Up"}
          </AwesomeButton>
        </div>
        <div className="text-xs font-semibold text-gray-400 py-6 ">
          {signIn ? "New to Netflix?" : "Alredy a user?"}{" "}
          <p
            className="text-white inline-block cursor-pointer hover:underline"
            onClick={togglesignIn}
          >
            {signIn ? "Sign Up Now" : "Sign in"}
          </p>{" "}
        </div>
      </form>
      <Header />
    </div>
  );
};

export default Login;
