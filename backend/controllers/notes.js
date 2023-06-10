const Note = require("../models/Note");

// create note
const createNote = async (req, res) => {
  try {
    await Note.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "Note created Successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong!! try again.." });
  }
};

// Get all notes or a specific note
const getNotes = async (req, res) => {
  try {
    const userID = req.headers["userid"];
    const noteID = req.query.noteID;

    if (noteID) {
      const note = await Note.findOne({ _id: noteID, userID });
      if (!note) {
        return res
          .status(404)
          .json({ success: false, message: "Note not found!!" });
      }
      res.status(200).json({ success: true, note });
    } else {
      const notes = await Note.find({ userID }).sort({ createdAt: -1 });
      if (!notes) {
        return res
          .status(404)
          .json({ success: false, message: "Note not found!!" });
      }
      res.status(200).json({ success: true, notes });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! Try again..." });
  }
};

// update note
const updateNote = async (req, res) => {
  try {
    const userID = req.headers["userid"];
    const noteID = req.query.noteID;
    const note = await Note.findOneAndUpdate(
      { _id: noteID, userID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!note) {
      return res
        .status(404)
        .json({ success: false, message: "Note Not found!!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Note updated Successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! Try again..." });
  }
};

// delete note
const deleteNote = async (req, res) => {
  try {
    const userID = req.headers["userid"];
    const noteID = req.query.noteID;
    const note = await Note.findOneAndDelete({ _id: noteID, userID });
    if (!note) {
      return res
        .status(404)
        .json({ success: false, message: "Note Not found!!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Note deleted Successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! Try again..." });
  }
};

module.exports = { createNote, getNotes, updateNote, deleteNote };
