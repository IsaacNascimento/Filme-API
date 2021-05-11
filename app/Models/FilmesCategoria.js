'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FilmesCategoria extends Model {

    static getCamposCadastro(){
        return [
            'categoria_id', 
            'filme_id'
        ]
    }

    filmes(){ 
        return this.belongsTo('App/Models/Filme')
    }
    categorias(){ 
        return this.belongsTo('App/Models/Categoria')
    }

    
}

module.exports = FilmesCategoria
