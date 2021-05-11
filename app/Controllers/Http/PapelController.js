'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Papel = use("App/Models/Papel")
/**
 * Resourceful controller for interacting with Papels
 */
class PapelController {
  /**
   * Show a list of all Papels.
   * GET Papels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Papel.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Papel.
   * GET Papels/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Papel.
   * POST Papels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Papel = request.only(['nome', 'duracao'])
    //return await Papel.create(Papel)

    const campos = Papel.getCamposCadastro() //Forma mais elegante
    const papel = request.only(campos)
    return await Papel.create(papel)

  }

  /**
   * Display a single Papel.
   * GET Papels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Papel.query()                 
                      .with('elencos')
                      .where('id', params.id)
                      .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Papel.
   * GET Papels/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Papel details.
   * PUT or PATCH Papels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Papels/14
    //const Papel = await Papel.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //Papel.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //Papel.save(); //Salva os dados inseridos

    //return Papel; //retonra os novos dados

    const papel = await Papel.findOrFail(params.id); //Forma mais elegante

    const campos = Papel.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    papel.merge(dados);
    papel.save();

    return papel;
  }

  /**
   * Delete a Papel with id.
   * DELETE Papels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const papel = await Papel.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await papel.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = PapelController
