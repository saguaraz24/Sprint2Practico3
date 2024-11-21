import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({

//  assert.ok(!isNaN(val))


  nombreSuperHeroe: {type: String, required: true},
  nombreReal: {type: String, required: true},
  edad: {type: Number, min: 0},
  planetaOrigen: {type: String, default: 'Desconocido'},
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  cratedAt: {type: Date, default: Date.now},
  Creador: {type: String, default: 'Sebastián Guaraz'}
}, { collection: 'Grupo-09' });


const SuperHero = mongoose.model('SuperHero', superheroSchema);
export default SuperHero;