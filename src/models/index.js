const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

//const { conversations, messages, participants, users } = models;

module.exports = models;
