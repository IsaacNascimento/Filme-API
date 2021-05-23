'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class FilmesCliente extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      filme_id: 'integer|required',
      cliente_id: 'integer|required',
    
    }
  }
}

module.exports = FilmesCliente
