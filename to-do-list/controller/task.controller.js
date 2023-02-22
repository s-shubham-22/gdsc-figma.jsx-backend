const { Task } = require('../model')

exports.addTask = async (req, res) => {
    try {
        const { title, description } = req.body
        const task = new Task({ title, description })

        await task.save()
        res.status(201).json({
            message: 'Task added successfully!',
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error adding task!',
        })
    }
}

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json({
            tasks,
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error getting tasks!',
        })
    }
}

exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({
            task,
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error getting task!',
        })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const { title, description } = req.body
        const task = await Task.findByIdAndUpdate(req.params.id, {
            title,
            description,
        })
        res.status(200).json({
            message: 'Task updated successfully!',
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error updating task!',
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: 'Task deleted successfully!',
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error deleting task!',
        })
    }
}
