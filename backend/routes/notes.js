const express = require("express");
const notesRouter = express.Router();
const verifyToken = require("../middleware/verifyToken");
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

notesRouter
  .route("/")
  .get(verifyToken, getNotes)
  .post(verifyToken, createNote)
  .put(verifyToken, updateNote)
  .delete(verifyToken, deleteNote);

module.exports = notesRouter;
