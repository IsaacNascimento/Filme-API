'use strict'

/*
|--------------------------------------------------------------------------
| FilmeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Filme = use('App/Models/Filme')

class FilmeSeeder {
  async run () {
    await Filme.createMany([
      {id: 1,nome: 'Titanic',       categoria_id: 2, elenco_id: 2, papel_id: 1 },
      {id: 2,nome: 'Os Infiltrados',categoria_id: 1, elenco_id: 3, papel_id: 2 },
      {id: 3,nome: 'Gran Torino'   ,categoria_id: 2, elenco_id: 4, papel_id: 2 },
      {id: 4,nome: 'The Rock'      ,categoria_id: 1, elenco_id: 5, papel_id: 1},
      {id: 5,nome: 'Pulp Fiction'  ,categoria_id: 2, elenco_id: 1, papel_id: 2 },
      {id: 6,nome: 'Kill Bill'     ,categoria_id: 2, elenco_id: 1, papel_id: 2},
    ])

  }
}

module.exports = FilmeSeeder
