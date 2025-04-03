const {Router } = require('express')

const bookingRouter = Router()



bookingRouter.get('/',(req,res)=>{
    res.send('toy en booking')
})

module.exports = bookingRouter