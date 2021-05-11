'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const FilmesCliente = use("App/Models/FilmesCliente")
/**
 * Resourceful controller for interacting with FlimesClientes
 */
class FlimesClienteController {
  /**
   * Show a list of all FlimesClientes.
   * GET FlimesClientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await FilmesCliente.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new FilmesCliente.
   * GET FilmesCliente/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new FilmesCliente.
   * POST FilmesCliente
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const FilmesCliente = request.only(['nome', 'duracao'])
    //return await FilmesCliente.create(FilmesCliente)

    const campos = FilmesCliente.getCamposCadastro() //Forma mais elegante
    const filmesCliente = request.only(campos)
    return await FilmesCliente.create(filmesCliente)

  }

  /**
   * Display a single FlimesCliente.
   * GET FlimesClientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await FilmesCliente.query()                 
                              .with('filmes')
                              .with('clientes')
                              .where('id', params.id)
                              .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing FilmesCliente.
   * GET FilmesCliente/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update FlimesCliente details.
   * PUT or PATCH FilmesCliente/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/FilmesCliente/14
    //const FilmesCliente = await FilmesCliente.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //FilmesCliente.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //FilmesCliente.save(); //Salva os dados inseridos

    //return FilmesCliente; //retonra os novos dados

    const filmesCliente = await FilmesCliente.findOrFail(params.id); //Forma mais elegante

    const campos = FilmesCliente.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    filmesCliente.merge(dados);
    filmesCliente.save();

    return filmesCliente;
  }

  /**
   * Delete a FilmesCliente with id.
   * DELETE FilmesClientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const filmesCliente = await FilmesCliente.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await filmesCliente.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = FlimesClienteController
