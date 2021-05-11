'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {

    static getCamposCadastro(){
        return [
            'nome', 
            'email',
            'senha',
            'telefone'
        ]
    }

    filmes(){ 
        return this.belongsToMany('App/Models/Filme').pivotTable('filmes_clientes')
    }
}


module.exports = Cliente
