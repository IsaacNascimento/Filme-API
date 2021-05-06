'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmesCategoriasSchema extends Schema {
  up () {
    this.create('filmes_categorias', (table) => {
      table.increments()
      table.integer('filme_id').references('id').inTable('filmes').unsigned().notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('filmes_categorias')
  }
}

module.exports = FilmesCategoriasSchema
