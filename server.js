const express = require('express')
const app =express();
const PORT =3001;
const  { signToken, verifyToken } = require('./utils/auth')
app.use(express.json())
app.get('/',verifyToken,(req,res)=>{

    res.json(req.username)
})

app.post('/login',(req,res) => {
    const username = req.body.username
  const user= {name:username}
    const token = signToken(user)
 
    res.json(token);

})

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);