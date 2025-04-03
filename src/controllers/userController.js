const {User} = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {Op} = require('sequelize');
const {v4: uuidv4} = require('uuid');       
const createUser = async (
    full_name,
    email,
    password,
    role
) => {

}

module.exports  = {
    createUser,

}