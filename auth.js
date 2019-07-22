const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.authenticate = (email, password) =>{
    return new Promise(async(resolve, reject) => {
        try{
            //get user by email
            const user = await User.findOne({email});

            // Match Password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch){
                    resolve(user);
                } else{
                    //Pass didn`t match
                    reject('Authentification Faled');
                }
            })
        } catch(err){
            //email not find
            reject('Authentification Faled');

        }
    });
}