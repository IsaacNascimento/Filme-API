'use strict'

/*
|--------------------------------------------------------------------------
| ElencoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Elenco= use('App/Models/Elenco')

class ElencoSeeder {
  async run () {
    await Elenco.createMany([
      {id: 1,nome: 'Tarantino', biografia: 'vencedor de dois Oscars de melhor roteiro original e foi eleito o 19° maior diretor de cinema dos últimos 25 anos'},
      {id: 2,nome: 'Leornado Di Caprio', biografia: 'Conhecido mundialmente por Titanic' },
      {id: 3,nome: 'Martin Scorse', biografia: 'vencedor do Oscar de melhor diretor por Os Infiltrados.'},
      {id: 4,nome: 'Clint Eastwood', biografia: 'Conhecido mundialmente por seus filmes do Velho-Oeste'},
      {id: 5,nome: 'Sylvester Stallone', biografia: 'Conhecido mundialmente pela sequência The Rock'},


    ])
  }
}

module.exports = ElencoSeeder
