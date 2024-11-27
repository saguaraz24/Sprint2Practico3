import express from 'express';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs';

const router = express.Router();

//console.log(`Ruta: Recibiendo solicitud GET para superhéroe con Edad:` )

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id([a-fA-F0-9]{24})', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

//***Muestro mensaje para ruta */
//router.get('/buscar/edad/:edad', (req, res, next) => {
   // console.log(`Ruta: Recibiendo solicitud GET para superhéroes con edad: ${valor}`);
  //  next(); // Pasa el control al controlador
  //});
  

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;

