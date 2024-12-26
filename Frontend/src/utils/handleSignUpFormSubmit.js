//working too well ->

import axios from "axios";

export const handleSignUpFormSubmit = async (data) => {
  try {
    const userData = await axios.post("http://localhost:5000/api/auth/", {
      data,
    });

    console.log("User data successfully saved at signup forms", userData);
    //use env for port
  } catch (error) {
    console.log("Error in post request at signupform", error.message);
  }
};
