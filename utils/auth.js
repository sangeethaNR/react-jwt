require('dotenv').config();
const jwt =require('jsonwebtoken');


module.exports = {
    signToken: function({name}){
        console.log("username insignToken:"+ name)
        return jwt.sign(name,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
    },
   verifyToken:function(req,res,next){
       let token = req.headers.authorization;
       console.log("token:" + token)
       if(token){
           token = token.split(' ').pop().trim();
       }
       if(!token){
           return res.sendStatus(401)
       }
 jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,{ maxAge: '1h' },(err,user)=>{
if(err)
return res.sendStatus(403)
console.log("user:" + user)
req.username =user
next();
return req;
})
   }
};
