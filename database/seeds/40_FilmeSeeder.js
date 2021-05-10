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
      {id: 1,nome: 'Titanic'       , descricao: 'Romande dramático'},
      {id: 2,nome: 'Os Infiltrados', descricao: ''},
      {id: 3,nome: 'Gran Torino'   , descricao: ''},
      {id: 4,nome: 'The Rock'      , descricao: 'Filme de luta'},
      {id: 5,nome: 'Pulp Fiction'  , descricao: ''},
      {id: 6,nome: 'Kill Bill'     , descricao: ''},
    ])

  }
}

module.exports = FilmeSeeder
