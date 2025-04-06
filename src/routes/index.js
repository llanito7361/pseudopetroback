const {Router } = require('express')
const bookingRouter = require('./bookingRouter')
const petRouter = require('./petRouter')
const authRouter = require('./authRouter')
// const userRouter = require('./userRouter')

const mainRouter = Router()

mainRouter.use('/booking',bookingRouter)

mainRouter.use('/pet',petRouter)

// mainRouter.use('/users',userRouter)

mainRouter.use('/auth', authRouter)

mainRouter.get('/oli',(req,res)=>{
    res.send('oli')
})

module.exports = mainRouter