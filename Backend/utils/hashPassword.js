import bcrypt from "bcrypt";

async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 8);
  return hashedPassword;
}

export default hashPassword;
