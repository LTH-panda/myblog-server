const Log = require("../../model/log");

exports.getList = async (req, res) => {
  try {
    const list = await Log.find();
    res.send(list);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Log.findById({ _id: id });
    res.send(post);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.remove = async (req, res) => {
  const { id } = req.body;

  try {
    const post = await Log.findByIdAndRemove({ _id: id }).exec();
    res.send("successfully remove");
  } catch (e) {
    res.status(500).send(e);
  }
};
