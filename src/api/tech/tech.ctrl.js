const Tech = require("../../model/tech");

exports.getList = async (req, res) => {
  try {
    const list = await Tech.find();
    res.send(list);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Tech.findById({ _id: id });
    res.send(post);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Tech.findByIdAndDelete({ _id: id }).exec();
    res.send("successfully remove");
  } catch (e) {
    res.status(500).send(e);
  }
};
