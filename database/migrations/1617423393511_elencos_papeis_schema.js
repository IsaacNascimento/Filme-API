'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ElencosPapeisSchema extends Schema {
  up () {
    this.create('elencos_papeis', (table) => {
      table.increments()
      table.integer('filme_id').references('id').inTable('filmes').unsigned().notNullable()
      table.integer('elenco_id').references('id').inTable('elencos').unsigned().notNullable()
      table.integer('papel_id').references('id').inTable('papeis').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('elencos_papeis')
  }
}

module.exports = ElencosPapeisSchema
