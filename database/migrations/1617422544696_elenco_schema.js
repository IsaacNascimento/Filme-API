'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ElencoSchema extends Schema {
  up () {
    this.create('elencos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('biografia', 1000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('elencos')
  }
}

module.exports = ElencoSchema
