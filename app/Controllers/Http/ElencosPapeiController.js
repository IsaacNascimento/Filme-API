'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ElencosPapeis = use("App/Models/ElencosPapei")
/**
 * Resourceful controller for interacting with ElencosPapeis
 */
class ElencosPapeiController {
  /**
   * Show a list of all ElencosPapeis.
   * GET ElencosPapeis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await ElencosPapeis.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new ElencosPapeis.
   * GET ElencosPapeiss/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new ElencosPapeis.
   * POST ElencosPapeiss
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const ElencosPapeis = request.only(['nome', 'duracao'])
    //return await ElencosPapeis.create(ElencosPapeis)

    const campos = ElencosPapeis.getCamposCadastro() //Forma mais elegante
    const elencosPapeis = request.only(campos)
    return await ElencosPapeis.create(elencosPapeis)

  }

  /**
   * Display a single ElencosPapeis.
   * GET ElencosPapeiss/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await ElencosPapeis.query()                 
                              .with('filmes')
                              .with('papeis')
                              .with('elencos')
                              .where('id', params.id)
                              .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing ElencosPapeis.
   * GET ElencosPapeiss/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update ElencosPapeis details.
   * PUT or PATCH ElencosPapeiss/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/ElencosPapeiss/14
    //const ElencosPapeis = await ElencosPapeis.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //ElencosPapeis.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //ElencosPapeis.save(); //Salva os dados inseridos

    //return ElencosPapeis; //retonra os novos dados

    const elencosPapeis = await ElencosPapeis.findOrFail(params.id); //Forma mais elegante

    const campos = ElencosPapeis.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    elencosPapeis.merge(dados);
    elencosPapeis.save();

    return elencosPapeis;
  }

  /**
   * Delete a ElencosPapeis with id.
   * DELETE ElencosPapeiss/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const elencosPapeis = await ElencosPapeis.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await elencosPapeis.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = ElencosPapeiController
