// Aquí va la conexión de MongoDB con la API
import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING_DB)
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error(err))

export default mongoose;
