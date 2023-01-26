const ConversationServices = require("../services/conversation.services");

const create = async (req, res) => {
  try {
    const conversation = req.body;
    const result = await ConversationServices.create(conversation);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { create };
