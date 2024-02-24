import app from './app.js';
import database from './database.js';

app.listen(process.env.SERVER_PORT, () =>{
    console.log("Servidor en el puerto: "+ process.env.SERVER_PORT)
})
