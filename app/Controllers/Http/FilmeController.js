'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Filme = use("App/Models/Filme")
/**
 * Resourceful controller for interacting with Filmes
 */
class FilmeController {
  /**
   * Show a list of all Filmes.
   * GET Filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Filme.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Filme.
   * GET Filmes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Filme.
   * POST Filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Filme = request.only(['nome', 'duracao'])
    //return await Filme.create(Filme)

    const campos = Filme.getCamposCadastro() //Forma mais elegante
    const filme = request.only(campos)
    return await Filme.create(filme)

  }

  /**
   * Display a single Filme.
   * GET Filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Filme.query()                 
                      .with('clientes')
                      .with('categorias')
                      .with('elenco_papeis')
                      .where('id', params.id)
                      .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Filme.
   * GET Filmes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Filme details.
   * PUT or PATCH Filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Filmes/14
    //const Filme = await Filme.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //Filme.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //Filme.save(); //Salva os dados inseridos

    //return Filme; //retonra os novos dados

    const filme = await Filme.findOrFail(params.id); //Forma mais elegante

    const campos = Filme.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    filme.merge(dados);
    filme.save();

    return filme;
  }

  /**
   * Delete a Filme with id.
   * DELETE Filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const filme = await Filme.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await filme.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = FilmeController
