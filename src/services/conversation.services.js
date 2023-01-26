const models = require("../models");

const { conversations, participants } = models;

class ConversationServices {
  static async create(conversation) {
    try {
      const result = await conversations.create(conversation);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationServices;
