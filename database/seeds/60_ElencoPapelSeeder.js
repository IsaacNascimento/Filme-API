'use strict'

/*
|--------------------------------------------------------------------------
| ElencoPapelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const ElencoPapel = use('App/Models/ElencosPapei')

class ElencoPapelSeeder {
  async run () {
    await ElencoPapel.createMany([
      {id: 1  ,filme_id: '1'  ,elenco_id: '1'  ,papel_id: "1",},
      {id: 2  ,filme_id: '2'  ,elenco_id: '2'  ,papel_id: "2",},
      {id: 3  ,filme_id: '3'  ,elenco_id: '3'  ,papel_id: "3",},
      {id: 4  ,filme_id: '4'  ,elenco_id: '4'  ,papel_id: "4",},
      {id: 5  ,filme_id: '5'  ,elenco_id: '5'  ,papel_id: "5",}
    ])
  }
}

module.exports = ElencoPapelSeeder
