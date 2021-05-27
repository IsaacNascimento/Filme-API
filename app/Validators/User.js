'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class User extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      username: 'required|max:80|min:2',
      email: 'required|email',
      password: 'required|max:60|min:4', 

      /*
      cep: 'max:8|min:8', 
      logradouro: 'max:100', 
      complemento: 'max:100', 
      bairro: 'max:100', 
      uf: 'max:2|min:2', 
      municipio: 'integer',*/

    }
  }
}

module.exports = User
