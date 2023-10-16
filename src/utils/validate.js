export const checkValidData = (email, pasword) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(pasword);

  if (!isEmailvalid) {
    return "Email Id is not valid";
  }

  if (!isPasswordValid) {
    return "Password should contain minimum 8 charecters , atleast 1 uppercase, 1 lowercase and 1 number";
  }

  return null;
};
