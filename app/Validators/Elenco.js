'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Elenco extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:3',
      biografia: 'required|max:299|min:5',
    }
  }
}

module.exports = Elenco
