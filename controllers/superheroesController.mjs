import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } 
from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } 
from '../views/responseView.mjs';

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

/* export async function buscarSuperheroesPorAtributoController(req, res) {
const { atributo, valor } = req.params;
const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

if (superheroes.length > 0) {
   res.send(renderizarListaSuperheroes(superheroes));
} else {
   res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
}
} */

export const buscarSuperheroesPorAtributoController = async (req, res) => {
   const { atributo, valor } = req.params;
   const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
   if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
 } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
 }
   try {
     let filtro;
 
     if (atributo === 'edad') {
       // Convertir valor a número y validar
       const edad = parseInt(valor, 10);
       if (isNaN(edad)) {
         return res.status(400).json({ error: 'El valor de edad debe ser un número válido.' });
       }
       filtro = { [atributo]: edad };
     } else {
       // Usar el valor directamente para otros atributos
       filtro = { [atributo]: valor };
     }
 
     const resultados = await SuperHero.find(filtro);
     res.json(resultados);
   } catch (error) {
     console.error('Error en la búsqueda:', error);
     res.status(500).json({ error: 'Error al realizar la búsqueda.' });
   }
 };
 

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
const superheroes = await obtenerSuperheroesMayoresDe30();
res.send(renderizarListaSuperheroes(superheroes));
}
