const express = require('express');
const { getPermissions, createPermission } = require('../controllers/permissionController');

const router = express.Router();

router.route('/').get(getPermissions).post(createPermission);

module.exports = router;
