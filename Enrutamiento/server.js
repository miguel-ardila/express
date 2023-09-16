const express = require('express');
const app = express();
const names = require('./names.json');
const port = 8000;

app.get('/', (req, res) => {
    res.send("Bienvenidos");
});

app.post('/nombres', (req, res) => {
    const newUser = {
        nombre: "Roberto",
        edad: "50"
    }
    names.push(newUser);
    res.send(names)
    console.log(names);
});

app.listen(port, () =>{
    console.log(`servidor en ejecución \n http://localhost:${port}`)
})
