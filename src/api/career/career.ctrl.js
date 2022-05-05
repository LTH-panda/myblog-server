const Career = require("../../model/career");
const Joi = require("joi");

exports.getList = async (req, res) => {
  try {
    const list = await Career.find();
    res.send(list);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getCareer = async (req, res) => {
  const { id } = req.params;
  try {
    const career = await Career.findById({ _id: id }).exec();
    res.send(career);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.write = async (req, res) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    desc: Joi.string().required(),
    during: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) return res.status(400).send(result.error);

  const { title, desc, during } = req.body;

  try {
    const career = new Career({
      title,
      desc,
      during,
    });
    await career.save();
    res.send(career);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Career.findByIdAndDelete({ _id: id }).exec();
    res.send("sucessfully remove");
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.update = async (req, res) => {
  const { id } = req.params;
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    desc: Joi.string().required(),
    during: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) return res.status(400).send(result.error);

  const { title, desc, during } = req.body;
  try {
    const career = await Career.findOneAndUpdate(
      { _id: id },
      { title, desc, during }
    ).exec();
    res.send("successfully update");
  } catch (e) {
    res.status(500).send(e);
  }
};
