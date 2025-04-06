const {Router } = require('express')
const{
    getUsersHandler,
getSingleUserHandler,
updateUserHandler,
removeUserHandler,
// createUserHandler,
} = require('../handlers/usersHandlers')
const userRouter = Router()
 
// ruta get
userRouter.get('/',getUsersHandler)
//sigle user get
userRouter.get('/:id',getSingleUserHandler)
//ruta post
// userRouter.post('/',createUserHandler)
//ruta delete 
userRouter.delete('/',removeUserHandler)
// ruta put
userRouter.put('/',updateUserHandler)

module.exports = userRouter