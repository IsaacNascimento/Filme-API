'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Elenco = use("App/Models/Elenco")
/**
 * Resourceful controller for interacting with Elencos
 */
class ElencoController {
  /**
   * Show a list of all Elencos.
   * GET Elencos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Elenco.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Elenco.
   * GET Elencos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Elenco.
   * POST Elencos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Elenco = request.only(['nome', 'duracao'])
    //return await Elenco.create(Elenco)

    const campos = Elenco.getCamposCadastro() //Forma mais elegante
    const elenco = request.only(campos)
    return await Elenco.create(elenco)

  }

  /**
   * Display a single Elenco.
   * GET Elencos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Elenco.query()                 
                       .with('papeis')
                       .where('id', params.id)
                       .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Elenco.
   * GET Elencos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Elenco details.
   * PUT or PATCH Elencos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Elencos/14
    //const Elenco = await Elenco.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //Elenco.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //Elenco.save(); //Salva os dados inseridos

    //return Elenco; //retonra os novos dados

    const elenco = await Elenco.findOrFail(params.id); //Forma mais elegante

    const campos = Elenco.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    elenco.merge(dados);
    elenco.save();

    return elenco;
  }

  /**
   * Delete a Elenco with id.
   * DELETE Elencos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const elenco = await Elenco.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await elenco.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = ElencoController
