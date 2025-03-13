const userDAO = require("../repository/userDAO");
const uuid = require("uuid");

async function postUser(user){
    if(validateUser(user)){
        const data = await userDAO.postUser({
            ...user,
            user_id: uuid.v4()
        });
        return data;
    }else{
        return null;
    }
}

async function validateLogin(username, password){
    const user = await getUserByUsername(username);
    if(user && user.password == password){
        return user;
    }else{
        return null;
    }
}

async function getUserByUsername(username){
    if(username){
        const data = await userDAO.getUserByUsername(username);
        if(data){
            return data;
        }else{
            return null;
        }
    }{
        return null;
    }
}

function validateUser(user){
    const usernameResult = user.username.length > 0;
    const passwordResult = user.password.length > 0;
    return (usernameResult && passwordResult);
}


module.exports = {
    postUser,
    validateLogin
}