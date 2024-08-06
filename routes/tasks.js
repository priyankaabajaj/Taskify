const express = require('express');
const router = express.Router();
const {getAllTasks} = require('../controllers/tasks');
const{createTask}=require('../controllers/tasks');
const{getSingleTask}=require('../controllers/tasks');
const{updateTask}=require('../controllers/tasks');
const{deleteTask}=require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


module.exports = router;