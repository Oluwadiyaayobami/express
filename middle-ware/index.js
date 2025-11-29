const express = require('express')
const server = express()


// middleware 


const mymiddleware =(req,res,next)=>{
     console.log('this is my first middele ware ')

     next()
};

server.use(mymiddleware)

server.get('/',(req,res)=>{
    res.send('welcome to our home page')
});
server.get('/about',(req,res)=>{
    res.send('welcome to our about section ')

})

const port = 3000

server.listen(port,()=>{
    console.log(`server listen on ${port}`)
})