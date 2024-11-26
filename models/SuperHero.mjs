import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  nombreReal: {type: String, required: true},
  edad: {type: Number, required: true, min: 0},
  planetaOrigen: {type: String, required:true, default: 'Desconocido'},
  debilidad: {type: String, required:true},
  poderes: {type: [String], required: true},  
  aliados: {type: [String], required: true},
  enemigos: {type: [String], required: true},
  cratedAt: {type: Date, default: Date.now},
  creador: {type: String, default: 'Sebastián Guaraz'}
}, { collection: 'Grupo-09' });

const SuperHero = mongoose.model('SuperHero', superheroSchema);
export default SuperHero;