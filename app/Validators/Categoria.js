'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Categoria extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      
      /*cpf: 'integer',
      data_nascimento: 'date',
      matricula: 'required|max:10',
      email: 'email',
      telefone: 'required|max:15|min:14', 
      cep: 'max:8|min:8', 
      logradouro: 'max:100', 
      complemento: 'max:100', 
      bairro: 'max:100', 
      uf: 'max:2|min:2', 
      municipio: 'integer',*/

    }
  }
}

module.exports = Categoria
