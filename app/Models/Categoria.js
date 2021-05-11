'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    static getCamposCadastro(){
        return [
            'nome', 
        ]
    }

    filmes(){ 
        return this.belongsToMany('App/Models/Filme').pivotTable('filmes_categorias')
    }
}

module.exports = Categoria
