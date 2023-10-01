import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true); 

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Netflix Logo"
                />
            </div>
            <form 
                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >

                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && 
                <input
                    type="text"
                    placeholder="Name"
                    className="p-4 my-4 block w-full bg-gray-700 rounded-lg"
                />
                }

                <input type="text" placeholder="Email Address"
                className="p-4 my-4 block w-full bg-gray-700 rounded-lg" />

                <input type="password" placeholder="Password" 
                className="p-4 my-2 block w-full bg-gray-700 rounded-lg" />

                <button className="p-4 my-6 block bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="p-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered , Sign In"}</p>
            
            </form>
        </div>
    );
};

export default Login;
