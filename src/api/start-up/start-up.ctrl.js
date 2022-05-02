const StartUp = require("../../model/start-up");

exports.getList = async (req, res) => {
  try {
    const list = await StartUp.find();
    res.send(list);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await StartUp.findById({ _id: id });
    res.send(post);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await StartUp.findByIdAndDelete({ _id: id }).exec();
    res.send("successfully remove");
  } catch (e) {
    res.status(500).send(e);
  }
};
