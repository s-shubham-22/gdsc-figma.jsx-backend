const express = require('express')
const router = express.Router()

const {
    TaskController: { addTask, getTasks, getTask, updateTask, deleteTask },
} = require('../controller')

router.post('/', addTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
