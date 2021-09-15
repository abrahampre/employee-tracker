const express = require('express');
const router = express.Router();

router.use(require('./departmentsRoutes'));
router.use(require('./employeeRoutes'));
router.use(require('./rolesRoutes'));

module.exports =router;