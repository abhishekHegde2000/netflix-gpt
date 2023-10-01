export const checkSignUpData = (name, email, password) => {
    const isNameValid = /^[a-zA-Z0-9]+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9]+$/.test(password);
  
    if (!isNameValid) {
      return "Name is not valid. It should be alphanumeric";
    }
    if (!isEmailValid) {
      return "Email is not valid. It should be alphanumeric and must have @gmail.com";
    }
    if (!isPasswordValid) {
      return "Password is not valid. It should be alphanumeric";
    }
  
    return null;
  };
  
export const checkSignInData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9]+$/.test(password);

    if (!isEmailValid) {
        return "Email is not valid. It should be alphanumeric and must have @gmail.com";
      }
      if (!isPasswordValid) {
        return "Password is not valid. It should be alphanumeric";
      }

    return null;
  };