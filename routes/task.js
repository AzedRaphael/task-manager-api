const express = require('express')
const router = express.Router()
const {getTask, updateTask, createTask, deleteTask, getSingleTask} = require('../controllers/taskCtrls')

router.route('/').get(getTask).post(createTask);
router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask);

module.exports = router