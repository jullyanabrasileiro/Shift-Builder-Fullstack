const express = require('express');
const { getComments, createComment } = require('../controllers/commentController');

const router = express.Router();

router.route('/').get(getComments).post(createComment);

module.exports = router;
