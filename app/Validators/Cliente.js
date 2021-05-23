'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Cliente extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      email: 'required|max:100|min:11',
      senha: 'required|max:50|min:5',
      telefone: 'max:15|min:14',
      
    }
  }
}

module.exports = Cliente
