const express = require('express')
const server  = express()
    
    server.get('/', (req,res)=>{
        res.send('hello word')
       //this send a regues to the server when the user open it 
})

server.get('/products' ,(req,res)=>{
    const product = [
        { id: '1', item: 'food' },
        { id: '3', item: 'food3' },
        { id: '2', item: 'food2' }
]
res.send(product)

})

server.get('/products/:id',(req,res)=>{
    const productid = parseInt(req.params.id) //parseInt convert to a number and req.params.id get the id from the url 
        const products  = 
    [
        { id: 1, item: 'food' },
        { id: 3, item: 'food3' },
        { id: 2, item: 'food2' }
    ]
    const getsingleproduct  = products.find(products=> products.id === productid)
    if(getsingleproduct){
        res.json(getsingleproduct)
    }
    else{
        res.status(404).send( 'no product found try  new product ')
    }
})

server.get('/login/:id',(req,res)=>{
    const userid = parseInt( req.params.id)
    const user  = [ 
            { id: 1, username: 'ayobami' },
            { id: 2, username: 'bella' },
            { id: 3, username: 'chinedu' },
            { id: 4, username: 'daniel' },
            { id: 5, username: 'emma' }
        ];

    const singleuser = user.find(user => user.id === userid)
    if(singleuser){
        res.json(singleuser)// so we have to return a json oject so the browser can iteractwith it easily 
    }
    else{
        res.status(404).send('user data not found ')
    }

})


server.get('/information/:id',(req,res) => {
    const cerateid = parseInt(req.params.id)

    const informations = [
            { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
            { id: 2, title: '1984', author: 'George Orwell' },
            { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
            { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
            { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];
    const getsinglebook = informations.find(informations => informations.id === cerateid)
    if(getsinglebook){
        res.json(getsinglebook)

    }
    else{
        res.status(404).send('book not found ')
    }
    
})

const port = 3000 
server.listen(port,()=>{
    console.log(`app running on ${port}`)
})