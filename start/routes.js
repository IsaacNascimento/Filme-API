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

// import { imageUploaderController } from '../app/Controllers/Http/FilmeController'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


// Route.post('/filmes/image-upload', 'FilmesController', imageUploaderController)     

Route.get('/', () => {
  return { greeting: 'Welcome to my Public API about movies 😊' }
})

// Route.post('/token', 'UserController.token')
Route.resource('/users', 'UserController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'], 'User'], 
     ]))


Route.group(()=> {

  Route.resource('/categorias', 'CategoriaController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Categoria'], 
       ]))
  
  Route.resource('/elencos', 'ElencoController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Elenco'], 
       ]))
  
  Route.resource('/papeis', 'PapelController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Papel'], 
       ]))
  
  Route.resource('/filmes', 'FilmeController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Filme'], 
       ]))
  
  Route.resource('/clientes', 'ClienteController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Cliente'], 
       ]))
  
  Route.resource('/elencopapeis', 'ElencosPapeiController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'ElencosPapel'], 
       ]))
  
  Route.resource('/filmecategorias', 'FilmesCategoriaController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'FilmesCategoria'], 
       ]))
  
  Route.resource('/filmeclientes', 'FilmesClienteController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'FilmesCliente'], 
       ]))

})
// .middleware('auth')




     

