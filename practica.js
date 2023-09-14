const express = require('express');
const app = express();
const port = 3000;

// Genera un número aleatorio entre 1 y 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

const gaming = (req, res, next) => {
    console.log("¡Bienvenido al juego!");
    next();
}

const appGaming = (req, res, next) => {
    console.log("🎮!!");
    next();
}

// Estado del juego
let numeroSecreto = generateRandomNumber();

app.get('/game/start-game', gaming, appGaming, (req, res) => {
  res.send('¡Bienvenido a mi servidor de videojuegos! ¿Listo para jugar? 🎮');
});

app.get('/game/guess/2', (req, res) => {
  const numeroUsuario = parseInt(req.params.numero);

  if (numeroUsuario === numeroSecreto) {
    res.send('¡Felicidades! Adivinaste el número secreto.');
    numeroSecreto = generateRandomNumber(); // Reinicia el juego
  } else {
    res.send('Oops, intenta de nuevo.');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${port}`);
});
