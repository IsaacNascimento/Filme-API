'use strict'

/*
|--------------------------------------------------------------------------
| PapelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Papel = use('App/Models/Papel')

class PapelSeeder {
  async run () {
    await Papel.createMany([
      {id: 1,nome: 'Ator'},
      {id: 2,nome: 'Diretor'},
      {id: 3,nome: 'Figurinista'},
      {id: 4,nome: 'Efeitos Visuais'},
      {id: 5,nome: 'Trilha sonora'},
      {id: 6,nome: 'Roteirista'},

    ])

  }
}

module.exports = PapelSeeder
