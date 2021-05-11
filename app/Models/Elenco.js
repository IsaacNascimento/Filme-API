'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Elenco extends Model { 

    static getCamposCadastro(){
        
    return [
        'nome', 
        'biografia',
    ]
}

papeis(){ 
    return this.belongsToMany('App/Models/Papel').pivotTable('elencos_papeis')
  }
}

module.exports = Elenco
