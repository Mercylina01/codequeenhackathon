const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  const msg = await Message.create(req.body);
  res.json(msg);
};

module.exports = { sendMessage };