const ConversationService = require("../services/conversation.service");
const ParticipantService = require("../services/participant.service");

const addConversation = async (req, res) => {
  try {
    const { title, createdBy, participant } = req.body;
    if (!title || !createdBy || !participant) {
      return res.status(400).json({ message: "Mising obligatoy data" });
    }
    const conversation = await ConversationService.add(title, createdBy);
    if (conversation) {
      const { id } = conversation;
      await ParticipantService.add(id, createdBy);
      await ParticipantService.add(id, participant);
      res.status(201).json({ message: "conversation created" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addConversation,
};
