import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
//const app = express();
//const PORT = process.env.PORT || 3000;

///////************ */
import blogRouter from './routes/blog.js'; // Importamos el módulo de rutas 
const app = 
express(); 
app.use('/blogs', blogRouter); // Asignamos las rutas al prefijo '/blogs' 
const PORT = 3000; 
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`)); 

///////////********* */



// Middleware para parsear JSON
app.use(express.json());


// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/api', superHeroRoutes);


// Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
