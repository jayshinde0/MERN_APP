import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  return token;
};
