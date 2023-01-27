const { Router } = require("express");
const { addConversation } = require("../controllers/conversation.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/conversations:
 *   post:
 *     summary: add a conversation
 *     tags: [Conversations]
 *     requestBody:
 *       description: Required fields to add a new conversation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/add'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: conversation added
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: bad credentials / something went wrong
 */

router.post("/", addConversation);

module.exports = router;
