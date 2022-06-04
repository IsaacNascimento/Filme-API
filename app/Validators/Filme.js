'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Filme extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      // descricao: 'required|max:200|min:5',
    }
  }
}

module.exports = Filme
