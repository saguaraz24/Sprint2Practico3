import SuperHero from '../models/SuperHero.mjs';
import IRepository from '../IRepository.mjs';
import { query } from 'express';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        const query = { [atributo]: new RegExp(valor, 'i') };
        console.log(query);
        return await SuperHero.find(query);
    }

    //*******const query = { [atributo]: new RegExp(valor, 'i') }; */

    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', poderes: { $size: { $gte: 2 } } });
    }
    
    async crearNuevoSuperHeroeController(atributo, valor) {
        return SuperHero.create;
    }
    
    
}

export default new SuperHeroRepository();
