'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cliente = use("App/Models/Cliente")
/**
 * Resourceful controller for interacting with Clientes
 */
class ClienteController {
  /**
   * Show a list of all Clientes.
   * GET Clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Cliente.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Cliente.
   * GET Clientes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Cliente.
   * POST Clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Cliente = request.only(['nome', 'duracao'])
    //return await Cliente.create(Cliente)

    const campos = Cliente.getCamposCadastro() //Forma mais elegante
    const cliente = request.only(campos)
    return await Cliente.create(cliente)

  }

  /**
   * Display a single Cliente.
   * GET Clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Cliente.query()                 
                        .with('filmes')
                        .where('id', params.id)
                        .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Cliente.
   * GET Clientes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Cliente details.
   * PUT or PATCH Clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Clientes/14
    //const Cliente = await Cliente.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //Cliente.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //Cliente.save(); //Salva os dados inseridos

    //return Cliente; //retonra os novos dados

    const cliente = await Cliente.findOrFail(params.id); //Forma mais elegante

    const campos = Cliente.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    cliente.merge(dados);
    cliente.save();

    return cliente;
  }

  /**
   * Delete a Cliente with id.
   * DELETE Clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cliente = await Cliente.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await cliente.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = ClienteController
