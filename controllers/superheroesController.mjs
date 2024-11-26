import SuperHero from '../models/SuperHero.mjs';
import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } 
from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } 
from '../views/responseView.mjs';

//*********** */
//import SuperHero from '../models/SuperHero.mjs'; // Modelo de Mongoose

/**
 * Controlador para crear un nuevo superhéroe  *** crearSuperheroeController
 */
export async function crearNuevoSuperHeroeController(req, res) {
    try {
        // Crear un nuevo documento basado en el modelo
        const nuevoSuperheroe = new SuperHero(req.body);

        // Guardar el superhéroe en la base de datos
        const superheroeGuardado = await nuevoSuperheroe.save();

        // Responder con el superhéroe creado
        res.status(201).json({
            mensaje: 'Superhéroe creado con éxito',
            superheroe: superheroeGuardado,
        });
    } catch (error) {
        console.error('Error al crear el superhéroe:', error);
        res.status(500).json({
            mensaje: 'Error al crear el superhéroe',
            error: error.message,
        });
    }
};


export async function obtenerSuperheroePorIdController(req, res) {
const { id } = req.params;
const superheroe = await obtenerSuperheroePorId(id);

if (superheroe) {
   res.send(renderizarSuperheroe(superheroe));
} else {
   res.status(404).send({ mensaje: "Superhéroe no encontrado" });
}
}

export async function obtenerTodosLosSuperheroesController(req, res) {
const superheroes = await obtenerTodosLosSuperheroes();
res.send(renderizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroesPorAtributoController(req, res) {
const { atributo, valor } = req.params;
const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

if (superheroes.length > 0) {
   res.send(renderizarListaSuperheroes(superheroes));
} else {
   res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
}
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
const superheroes = await obtenerSuperheroesMayoresDe30();
res.send(renderizarListaSuperheroes(superheroes));
}
