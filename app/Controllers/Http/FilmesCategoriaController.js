'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const FilmesCategoria = use("App/Models/FilmesCategoria")
/**
 * Resourceful controller for interacting with FilmesCategorias
 */
class FilmesCategoriaController {
  /**
   * Show a list of all FilmesCategorias.
   * GET FilmesCategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await FilmesCategoria.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new FilmesCategoria.
   * GET FilmesCategorias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new FilmesCategoria.
   * POST FilmesCategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const FilmesCategoria = request.only(['nome', 'duracao'])
    //return await FilmesCategoria.create(FilmesCategoria)

    const campos = FilmesCategoria.getCamposCadastro() //Forma mais elegante
    const filmescategoria = request.only(campos)
    return await FilmesCategoria.create(filmescategoria)

  }

  /**
   * Display a single FilmesCategoria.
   * GET FilmesCategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await FilmesCategoria.query()                 
                                .with('filmes')
                                .with('categorias')
                                .where('id', params.id)
                                .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing FilmesCategoria.
   * GET FilmesCategorias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update FilmesCategoria details.
   * PUT or PATCH FilmesCategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/FilmesCategorias/14
    //const FilmesCategoria = await FilmesCategoria.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //FilmesCategoria.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //FilmesCategoria.save(); //Salva os dados inseridos

    //return FilmesCategoria; //retonra os novos dados

    const filmescategoria = await FilmesCategoria.findOrFail(params.id); //Forma mais elegante

    const campos = FilmesCategoria.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    filmescategoria.merge(dados);
    filmescategoria.save();

    return filmescategoria;
  }

  /**
   * Delete a FilmesCategoria with id.
   * DELETE FilmesCategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const filmescategoria = await FilmesCategoria.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await filmescategoria.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = FilmesCategoriaController
