'use strict'

/*
|--------------------------------------------------------------------------
| FilmeClienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const FilmeCliente = use('App/Models/FilmesCliente')

class FilmeClienteSeeder {
  async run () {
    await FilmeCliente.createMany([
      {id: 1  ,filme_id: '1'  ,cliente_id: '1'},
      {id: 2  ,filme_id: '2'  ,cliente_id: '2'},
      {id: 3  ,filme_id: '3'  ,cliente_id: '3'},
      {id: 4  ,filme_id: '4'  ,cliente_id: '4'},
      {id: 5  ,filme_id: '5'  ,cliente_id: '5'},
      {id: 6  ,filme_id: '6'  ,cliente_id: '6'}
    ])
  }
}

module.exports = FilmeClienteSeeder
