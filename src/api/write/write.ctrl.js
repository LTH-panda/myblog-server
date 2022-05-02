const Tech = require("../../model/tech");
const StartUp = require("../../model/start-up");
const Log = require("../../model/log");
const Joi = require("joi");

exports.write = async (req, res) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }

  const { title, content, category } = req.body;
  try {
    let post;
    switch (category) {
      case "Tech":
        post = new Tech({
          title,
          content,
        });
        break;
      case "Start-Up":
        post = new StartUp({
          title,
          content,
        });
        break;
      case "Log":
        post = new Log({
          title,
          content,
        });
        break;
      default:
        break;
    }
    await post.save();
    res.send(post);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.update = async (req, res) => {
  const schema = Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
  });
};
