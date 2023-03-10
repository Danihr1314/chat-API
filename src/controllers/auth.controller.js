const AuthServices = require("../services/auth.services");
const trasnporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await trasnporter.sendMail({
        to: result.email,
        from: "danihr1314@gmail.com",
        subject: "Email confirmation",
        html: "<h1>Welcome to the greatest Chat ever created</h1><p>Realiza la confirmacion del email para empezar</p>",
      });
    } else {
      res.status(400).json({ message: "somethign wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email provided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password provided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { firstname, lastname, id, email } = result.user;
      const userData = { firstname, lastname, id, email };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    next({ message: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
};
