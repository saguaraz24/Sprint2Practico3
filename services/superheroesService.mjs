import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    console.log(`Servicio: Solicitando mostrar información de superhéroes con edad: ${valor}`);
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

export async function crearNuevoSuperHeroeController(atributo, valor) {
    return await superHeroRepository.crearNuevoSuperHeroe(atributo, valor);
}

//crearSuperheroeController = async (req, res)