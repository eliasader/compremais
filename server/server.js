import express from "express";

const port = process.env.PORT || 3000;

const server = express();

server.use(express.json())

const products = [
    {id: 1, "titulo" : "Ferro de Passar"},
    {id: 2, "titulo" : "Tenis da Nike"}
]
server.get('/', (req, res) =>{
    res.status(200).send(products);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })