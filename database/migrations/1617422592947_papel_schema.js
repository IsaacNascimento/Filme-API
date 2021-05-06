'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PapelSchema extends Schema {
  up () {
    this.create('papels', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('papels')
  }
}

module.exports = PapelSchema
