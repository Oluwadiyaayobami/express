const express = require('express')
const server = express()

server.use(express.json())
 const users = [
    { id: 1, name: "Ayobami", email: "ayobami@gmail.com", age: 22, course: "Computer Science" },
    { id: 2, name: "Bella", email: "bella@gmail.com", age: 19, course: "Mathematics" },
    { id: 3, name: "Daniel", email: "daniel@gmail.com", age: 25, course: "Physics" },
    { id: 4, name: "Precious", email: "precious@gmail.com", age: 21, course: "Biology" },
    { id: 5, name: "Michael", email: "michael@gmail.com", age: 24, course: "Chemistry" }
];


// cerating our base routh 
server.get('/',(req,res)=>{
    res.send('welcome to our main page ')
})
server.get('/getstudent',(req,res)=> {
    res.json(users)
})
server.post('/adduser',(req,res)=> {
    const newuser = { id: 6, name: "Michaels", email: "michael@gmails.com", age: 26, course: "Chemistryy" }
    users.push(newuser)

    res.json({
        message:'succes a new user has been added ',
        informaion: newuser
    })
})
server.delete('/delete/:id',(req,res)=>{
    const useruid = parseInt(req.params.id)

    const getcurrentindex = users.findIndex((i)=>i.id === useruid)
    if(getcurrentindex=== -1){
        res.status(404).send('user not found ')

    }
    else{
        users.splice(getcurrentindex,1)
    }
    res.json({
        message: `user form index ${getcurrentindex} has been deleted  `,
        status: 'succesful'
    })
})
const port = 3000 
server.listen(port,()=>{
    console.log(`server running on port ${port}`)
})