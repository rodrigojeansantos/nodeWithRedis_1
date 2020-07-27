const Task = require('../schemas/Task')
const clientRedis = require('../redis')

//const { json } = require('body-parser')

module.exports = async (req, res) => {

    try {                
        clientRedis.get('tasks', async (err, cached) =>{
            if(cached){
                return res.status(200).json({ data: cached })
            }
            //Salvando no cache
            const data = await Task.find({})
            clientRedis.set('tasks', JSON.stringify(data) )                
            clientRedis.exipire('tasks', 1000)
            console.log(data)
            return res.status(200).json({ data })
        })
        // const data = await Task.find({})
        

    } catch (err) {
        console.log(err)
        return res.status(500).json({err})
    }

}