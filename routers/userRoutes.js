const { Router } = require("express");
const {
  login,
  signup,
  logout,
  auth,
  getuser,
} = require("../controllers/authController");
const { requireAuth } = require("../middleware/authMiddleware");
const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.get("/auth", auth);
authRouter.get("/getprofile", requireAuth, getuser);
authRouter.get("/logout", logout);

module.exports = authRouter;
