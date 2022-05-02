const jwt = require("jsonwebtoken");
const Admin = require("../model/admin");

const jwtMiddleware = async (req, res, next) => {
  const token = req.signedCookies["access_token"];
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = {
      _id: decoded._id,
      username: decoded.username,
    };

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3) {
      const user = await Admin.findById(decoded._id);
      const token = user.generateToken();
      res.cookie("access_token", token, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    }
    return next();
  } catch (e) {
    return next();
  }
};

module.exports = jwtMiddleware;
