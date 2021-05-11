'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/categorias', 'CategoriaController').apiOnly()
Route.resource('/elencos', 'ElencoController').apiOnly()
Route.resource('/papeis', 'PapelController').apiOnly()
Route.resource('/filmes', 'FilmeController').apiOnly()
Route.resource('/clientes', 'ClienteController').apiOnly()
Route.resource('/elencopapeis', 'ElencosPapeiController').apiOnly()
Route.resource('/filmecategorias', 'FilmesCategoriaController').apiOnly()
Route.resource('/filmeclientes', 'FilmesClienteController').apiOnly()

