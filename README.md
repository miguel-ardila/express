# express

### Curso Básico de Express con Práctica

Las notas de este curso básico las puedes ver en el siguiente [enlace de Notion](https://www.notion.so/Curso-de-Express-js-d6d45c8478f24e48a106a7122b8d090d?pvs=4).


### Adicional hice un juego basico de adivinar el numero en express
# Servidor de Videojuegos con Express.js

Este es un ejemplo de un servidor web simple utilizando Express.js para crear un servidor de videojuegos básico. El servidor permite a los jugadores adivinar un número secreto y proporciona una respuesta en función de si adivinan o no el número correcto el archivo es practica.js.

## Requisitos

- Node.js instalado en tu sistema. Puedes descargarlo desde [el sitio web oficial de Node.js](https://nodejs.org/).

## Instalación

1. Clona o descarga este repositorio a tu máquina local.

2. Abre una terminal y navega hasta el directorio del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
### Uso

Inicia el servidor con el siguiente comando:

```bash
node server.js
```

- El servidor se ejecutará en el puerto 3000.

- Abre tu navegador web y visita http://localhost:3000/game/start-game para comenzar el juego.

- Adivina el número secreto visitando URLs como http://localhost:3000/game/guess/5, donde "5" es tu suposición la cual puedes modificar entre 1 a 10.

### Características
- Generación de un número secreto aleatorio en cada inicio del servidor.
- Los jugadores pueden adivinar el número secreto a través de la URL.
- Respuestas personalizadas para adivinanzas correctas e incorrectas.
- Mensajes creativos y emojis temáticos relacionados con videojuegos.

### Contribuciones
- Si deseas contribuir a este proyecto, ¡no dudes en enviar un pull request!

### Autor
Miguel Ardila




