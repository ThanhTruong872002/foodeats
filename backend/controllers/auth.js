const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ username: user.username, token });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new UnauthenticatedError("Username or password is incorrect");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Username or password is incorrect");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ username: user.username, token });
};

module.exports = {
  register,
  login,
};
