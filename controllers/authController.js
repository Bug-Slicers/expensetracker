const User = require("../models/user");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const handleError = (err) => {
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    let errorsarray = Object.values(err.errors);
    errorsarray.forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// creating tokens
const createTokens = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password == confirmPassword) {
    try {
      const user = await User.create({ name, email, password });
      const token = createTokens(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user });
    } catch (err) {
      const errors = handleError(err);
      res.status(404).json({ errors });
    }
  } else {
    res
      .status(400)
      .json({ errors: { confirmPassword: "Password Doesn't matches" } });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createTokens(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user });
  } catch (err) {
    const errors = handleError(err);
    res.status(404).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res
    .clearCookie("jwt")
    .status(204)
    .json({ message: "Logged out successfully" });
};

module.exports.auth = async (req, res) => {
  let token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        res.status(200).json({ msg: "Login to Proceed" });
      } else {
        const user = await User.findById(decodedToken.id);
        if (user) {
          res.status(200).json({ msg: "User Login Found" });
        }
      }
    });
  } else {
    res.status(200).json({ msg: "Login to Proceed" });
  }
};

module.exports.getuser = async (req, res) => {
  res.status(200).json({ user: req.user });
};
