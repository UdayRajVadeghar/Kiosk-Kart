//working too well ->

import axios from "axios";
import bcrypt from "bcryptjs";

export const handleSignUpFormSubmit = async (data) => {
  const userPassword = data.password;
  console.log(userPassword);

  //hashing and salting
  const saltRounds = 8; // - use env to do it

  try {
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);
    data.password = hashedPassword; //saving the new hashed password into the data object
    const userData = await axios.post("http://localhost:5000/api/auth/", {
      data,
    }); // --- Make this also protect by keeping in env too in the future

    console.log("User data successfully saved at signup forms", userData);
    //use env for port
  } catch (error) {
    console.log("Error in post request at signupform", error.message);
  }
};
