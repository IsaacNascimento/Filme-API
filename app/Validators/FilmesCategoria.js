'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class FilmesCategoria extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      filme_id: 'integer|required',
      categoria_id: 'integer|required',
    }
  }
}

module.exports = FilmesCategoria
