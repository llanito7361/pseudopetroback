const { createUser } = require('../controlers/userControler.js')

async function registerHandler (req, res) {
    const { full_name, email, password, role } = req.body;
    try {
        const { token, user } = await createUser(
            full_name,
            email,
            password,
            role
        )
        res.status(200).json({
            user,
            token
        })
    } catch (error) {
        res.status(400).send({
            error: error.message,
        })
    }

}

function logoutHandler () {

}
function meHandler () {

}

function loginHandler () {
    // Handle login logic here
    // For example, check credentials and set session
    console.log('Login handler called')
    // res.send('Login successful')
}

module.exports = {
    registerHandler,
logoutHandler,
meHandler,
loginHandler
}