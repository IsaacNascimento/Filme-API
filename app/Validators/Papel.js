'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Papel extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      
      /*turno: 'required|max:1|min:1',
      professor_id: 'integer|required',
      disciplina_id: 'integer|required',
      sala_id: 'integer|required',
      semestre_id: 'integer|required',*/
    }
  }
}

module.exports = Papel
