const Task = require('../schemas/Task')

module.exports = async (req, res) => {

    try {                
        const {id} = req.params
        if(!id) return res.status(400).json({err: 'Invalid Params'})
        const data = await Task.findById(id)
        console.log(data)
        return res.status(200).json({data})

    } catch (err) {
        console.log(err)
        return res.status(500).json({err})
    }

}