'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Categoria = use("App/Models/Categoria")
/**
 * Resourceful controller for interacting with Categorias
 */
class CategoriaController {
  /**
   * Show a list of all Categorias.
   * GET Categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Categoria.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Categoria.
   * GET Categorias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Categoria.
   * POST Categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Categoria = request.only(['nome', 'duracao'])
    //return await Categoria.create(Categoria)

    const campos = Categoria.getCamposCadastro() //Forma mais elegante
    const categoria = request.only(campos)
    return await Categoria.create(categoria)

  }

  /**
   * Display a single Categoria.
   * GET Categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Categoria.query()                 
                          .with('filmes')
                          .where('id', params.id)
                          .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Categoria.
   * GET Categorias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Categoria details.
   * PUT or PATCH Categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Categorias/14
    //const Categoria = await Categoria.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //Categoria.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //Categoria.save(); //Salva os dados inseridos

    //return Categoria; //retonra os novos dados

    const categoria = await Categoria.findOrFail(params.id); //Forma mais elegante

    const campos = Categoria.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    categoria.merge(dados);
    categoria.save();

    return categoria;
  }

  /**
   * Delete a Categoria with id.
   * DELETE Categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const categoria = await Categoria.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await categoria.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = CategoriaController
