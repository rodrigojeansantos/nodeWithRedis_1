const seeder = require('mongoose-seed')


seeder.connect(
    'mongodb+srv://userTemp:userTemp@cluster0.gg549.mongodb.net/redis?retryWrites=true&w=majority', 
    () => {
        seeder.loadModels(['src/schemas/Task']);
        seeder.clearModels(['Task'], function(){
            seeder.populateModels(require('./seed-info'), () =>{
                seeder.disconnect()
            })
        })
    })