const Admin = require("../../model/admin");
const Joi = require("joi");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).send("empty exists");
  }

  try {
    const admin = await Admin.findByUsername(username);
    if (!admin) return res.status(401).send("not authorized");

    const valid = await admin.checkPassword(password);
    if (!valid) return res.status(401).send("not authorized");

    const token = admin.generateToken();
    res.cookie("access_token", token, {
      httpOnly: true,
      signed: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.send(admin.serialize());
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.logout = async (req, res) => {
  res.cookie("access_token", null);
  res.send("logout");
};
exports.register = async (req, res) => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }

  const { username, password } = req.body;
  try {
    const exists = await Admin.findByUsername(username);
    if (exists) {
      return res.status(409).send("username already exists");
    }
    const admin = new Admin({
      username,
    });
    await admin.setPassword(password);
    await admin.save();
    const token = admin.generateToken();
    res.cookie("access_token", token, {
      httpOnly: true,
      signed: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.send(admin.serialize());
  } catch (e) {
    res.status(500).send(e);
  }
};
