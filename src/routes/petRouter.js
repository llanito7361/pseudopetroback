const {Router } = require('express')

const petRouter = Router()



petRouter.get('/',(req,res)=>{
    res.send('toy en pet')
})

module.exports = petRouter