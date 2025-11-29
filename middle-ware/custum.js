const express = require('express');
const server = express();


//middlerwere to get time 
const timemiddeleware = (req,res,next)=>{
    let time = new Date().toISOString()
    console.log(`${time} `)

    next()
}
server.use(timemiddeleware)
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
