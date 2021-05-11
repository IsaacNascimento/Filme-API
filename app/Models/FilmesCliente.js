'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FilmesCliente extends Model {

    static getCamposCadastro(){
        return [
            'cliente_id', 
            'filme_id'
        ]
    }

    filmes(){ 
        return this.belongsTo('App/Models/Filme')
    }
    clientes(){ 
        return this.belongsTo('App/Models/Cliente')
    }

    
}

module.exports = FilmesCliente
