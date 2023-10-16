export const checkValidData = (email, pasword) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  
  const isPasswordValid = /.*/.test(password);


  if (!isEmailvalid) {
    return "Email Id is not valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
