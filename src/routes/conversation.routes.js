const { Router } = require("express");
const { create } = require("../controllers/conversation.controller");

const router = Router();

router.post("/create", create);
//localhost:8000/api/v1/conversation/create

module.exports = router;
