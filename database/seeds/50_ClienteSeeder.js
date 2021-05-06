'use strict'

/*
|--------------------------------------------------------------------------
| ClienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Cliente = use('App/Models/Cliente')

class ClienteSeeder {
  async run () {
    await Cliente.createMany([
      {id: 1,nome: 'João',       email: "João@gmail",      senha: "000", telefone: "000000000"},
      {id: 2,nome: 'Pedro'      ,email: "Pedro@gmail",     senha: "111", telefone: "222222222" },
      {id: 3,nome: 'Maria'      ,email: "Maria@gmail",     senha: "222",},
      {id: 4,nome: 'Ana'        ,email: "Ana@gmail",       senha: "333",},
      {id: 5,nome: 'Francisco'  ,email: "Francisco@gmail", senha: "444",},
      {id: 6,nome: 'Leornado'   ,email: "Leornado@gmail",  senha: "555",}
    ])
  }
}

module.exports = ClienteSeeder
