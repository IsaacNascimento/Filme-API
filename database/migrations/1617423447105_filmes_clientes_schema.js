'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmesClientesSchema extends Schema {
  up () {
    this.create('filmes_clientes', (table) => {
      table.increments()
      table.integer('filme_id').references('id').inTable('filmes').unsigned().notNullable()
      table.integer('cliente_id').references('id').inTable('clientes').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('filmes_clientes')
  }
}

module.exports = FilmesClientesSchema
