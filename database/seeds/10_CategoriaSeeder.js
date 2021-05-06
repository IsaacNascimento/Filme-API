'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Categoria= use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await Categoria.createMany([
      {id: 1,nome: 'Ação e Aventura'},
      {id: 2,nome: 'Drama'},
      {id: 3,nome: 'Comédia'},
      {id: 4,nome: 'Romance'},
      {id: 5,nome: 'Ficção ciêntifica'},

    ])
  }
}

module.exports = CategoriaSeeder
