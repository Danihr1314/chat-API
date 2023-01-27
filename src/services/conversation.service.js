const models = require("../models");

const { conversations } = models;

class ConversationService {
  static async add(title, createdBy) {
    try {
      const result = await conversations.create({
        title,
        created_by: createdBy,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationService;
