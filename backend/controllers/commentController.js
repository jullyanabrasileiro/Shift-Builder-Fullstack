const Comment = require('../models/commentModel');

// Get - all comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('userId');
    res.json(comments);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create - new comment
const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getComments, createComment };
