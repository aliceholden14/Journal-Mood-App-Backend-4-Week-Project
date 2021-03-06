const express = require('express');
const router = express.Router();

const usersController = require('../../controller/users');

/* GET all users */
router.get('/', usersController.getAllUsers);

/* GET user by Email */
router.get('/:email', usersController.getUserByEmail);

/* POST new user */
router.post('/', usersController.createUser);

/* UPDATE existing user */
router.patch('/:userId', usersController.updateUserByUserId);

/* DELETE user by ID */
router.delete('/:userId', usersController.deleteUserById);

module.exports = router;
