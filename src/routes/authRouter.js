const { Router } = require('express')
const { loginHandler,registerHandler, logoutHandler, meHandler } = require('../handlers/authHandlers')
const authRouter = Router()

authRouter.get('/login', loginHandler)

authRouter.get('/register', registerHandler)
// authRouter.get('/logout', logoutHandler)
// authRouter.get('/me', meHandler)


authRouter.get('/', (req, res) => {
    res.send('toy en pet')
})

module.exports = authRouter