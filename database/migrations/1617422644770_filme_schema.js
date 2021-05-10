'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmeSchema extends Schema {
  up () {
    this.create('filmes', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('descricao', 200)
      //table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      //table.integer('elenco_id').references('id').inTable('elencos').unsigned().notNullable()
      //table.integer('papel_id').references('id').inTable('papels').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('filmes')
  }
}

module.exports = FilmeSchema
