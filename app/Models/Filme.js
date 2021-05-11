'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filme extends Model {

    static getCamposCadastro(){
        return [
            'nome', 
            'descricao',
        ]
    }

    clientes(){ 
        return this.belongsToMany('App/Models/Cliente').pivotTable('filmes_clientes')
    }
    categorias(){ 
        return this.belongsToMany('App/Models/Categoria').pivotTable('filmes_categorias')
    }
    elenco_papeis(){ 
        return this.hasMany('App/Models/ElencosPapei')
    }
    

}

module.exports = Filme
