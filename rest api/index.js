const express = require('express');
const server = express()

server.use(express.json());
 const users = [
    { id: 1 },
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5 }
]


server.get('/' ,(req,res)=>{
    res.json(users)

})
server.post('/add',(req,res)=> {
    const newuser = {
        id: users.length + 1 
    }

    users.push(newuser)
    res.json({
                message: 'user added ',
                information : newuser
    })
})

server.post('/added',(req,res)=>{
    const newusers = {
        id: users.length + 1 
    }

    users.push(newusers)
    res.json({
        message: 'users added ',
        information : newusers
    })


})
server.delete('/add/:id',(req,res)=> {
    const userid = parseInt(req.params.id)// converting from string to number 
    const index = users.findIndex((i) => i.id === userid)
    if (index === -1){
        res.status(404).send('error user not found ')

    }
    users.splice(index,1)// delect the object at the index of 1 and only delete one object 


    res.json({
        message: 'user deleted '
    })
})
// this handle delet based on the user id 
server.delete('/delet/:id', (req,res) => {
    const userid  = parseInt(req.params.id)//this get the unigue id from what is rendring on the browser 
    const currentobjectindex = users.findIndex((i)=> i.id === userid)//findindex() this get theindex of the object that matchess the id 
    if(currentobjectindex === -1){
        res.status(404).send('user not found')
    }
    else{
        users.splice(currentobjectindex,1)
    }
    res.json({
        message: 'user removed succesful '
    })
})

server.put('/put/:id',(req,res)=>{
    const userid = parseInt(req.params.id)// converted to a number 
    const currentobjectindex = users.findIndex((i)=>i.id === userid)
    if(currentobjectindex === -1){
        res.status(404).send('user not found ')

    }
    else(
        users[currentobjectindex] = {id: 133}
    )
    res.json({
        message: 'an update was succesful '
    })
})
const port = 3000
server.listen(port ,()=>{
    console.log(`server listen on port ${port}`)
})
