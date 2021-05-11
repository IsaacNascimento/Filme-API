'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ElencosPapei extends Model {

    static getCamposCadastro(){
        return [
            'papel_id', 
            'elenco_id',
            'filme_id',
        ]
    }

    papeis(){ 
        return this.belongsTo('App/Models/Papel')
    }
    elencos(){ 
        return this.belongsTo('App/Models/Elenco')
    }
    filmes(){ 
        return this.belongsTo('App/Models/Filme')
    }



}

module.exports = ElencosPapei
