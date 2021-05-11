'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Papel extends Model {

    static get table(){
       return 'papeis'
        
     }

    static getCamposCadastro(){
        
        return [
            'nome'
        ]
    }
    
   elencos(){ 
        return this.belongsToMany('App/Models/Elenco').pivotTable('elencos_papeis')
      }
}

module.exports = Papel
