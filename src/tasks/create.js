const Task = require('../schemas/Task')

module.exports = async (req, res) => {

    try {                
        const task = await Task.create(req.body)
        console.log(task)
        return res.status(201).json({task})

    } catch (err) {
        console.log(err)
        return res.status(500).json({err})
    }

}