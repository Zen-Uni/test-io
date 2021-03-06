/**
 * @description Sign router's controller
 */

const { UserModel } = require("../db/index");
const { dispatchToken, parseToken } = require("../utils/jwt");
const { ErrorModel, SuccessfulModel } = require("../utils/ResultModel");
 
// email check
const emailCheck = (email) => {
    return new Promise(async (resolve, reject) => {
        const res = await UserModel.findOne({email}).exec();
        if (res === null) {
            resolve(new SuccessfulModel("Email is available"));
        } else {
            resolve(new ErrorModel("Email not available"));
        }
    })
}


// user register
const userRegister =  (userMsg) => {
    const User = new UserModel(userMsg);
    return new Promise(async (resolve, reject) => {
       try {
        await User.save();
        const { email, username } = userMsg;
        const token = await dispatchToken(email);
        const res = new SuccessfulModel({
            token, 
            username
        }, "User registration succeeded");

        resolve(res);
       } catch (err) {
           console.log(err);
           console.log("The user already exists");
           resolve(new ErrorModel("The user already exists"));
       }
    })   
}


// user login
const userLogin = (userMsg) => {
    return new Promise(async (resolve, reject) => {
        const res = await UserModel.findOne(userMsg).exec();
        if (res == null) {
            resolve(new ErrorModel("Have not yet registered"));
        } else {
            const { email } = userMsg;
            const { username } = res;
            const token = await dispatchToken(email);
            resolve(new SuccessfulModel({
                token,
                username
            }, "login successfully"))
        }

    })
}


// token check
const tokenCheck = (token) => {
    return new Promise(async(resolve, reject) => {
        const res = parseToken(token);
        if (res.code) {
            resolve(res);
        } 
        else {
            try {
                const user = await UserModel.findOne({
                    email: res.data.email
                }).exec();
                if (user == null) {
                    resolve(new ErrorModel("Token Parsing failed"));
                } else {
                    const { username, email, avatar } = user;
                    const resMsg = {username, email, avatar};
                    resolve(new SuccessfulModel(resMsg));
                }
                
            } catch {
                resolve(new ErrorModel("Token Parsing failed"))
            }
        }
       
    })
}

module.exports = {
    emailCheck,
    userRegister,
    userLogin,
    tokenCheck
}