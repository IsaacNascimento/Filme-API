'use strict'

/*
|--------------------------------------------------------------------------
| FilmeCategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const FilmeCategoria = use('App/Models/FilmesCategoria')

class FilmeCategoriaSeeder {
  async run () {
    await FilmeCategoria.createMany([
      {id: 1  ,filme_id: '1'  ,categoria_id: '1'},
      {id: 2  ,filme_id: '2'  ,categoria_id: '2'},
      {id: 3  ,filme_id: '3'  ,categoria_id: '3'},
      {id: 4  ,filme_id: '4'  ,categoria_id: '4'},
      {id: 5  ,filme_id: '5'  ,categoria_id: '5'},
      {id: 6  ,filme_id: '6'  ,categoria_id: '6'}
    ])
  }
}

module.exports = FilmeCategoriaSeeder
