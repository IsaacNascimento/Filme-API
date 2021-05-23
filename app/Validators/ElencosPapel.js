'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class ElencosPapel extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      filme_id: 'integer|required',
      elenco_id: 'integer|required',
      papel_id: 'integer|required',
      
    }
  }
}

module.exports = ElencosPapel
