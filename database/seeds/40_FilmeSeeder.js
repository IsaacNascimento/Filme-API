"use strict";

/*
|--------------------------------------------------------------------------
| FilmeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const Filme = use("App/Models/Filme");

const constantes = require("./constantes");

class FilmeSeeder {
  async run() {
    await Filme.createMany([
      {
        id: 1,
        nome: "Titanic",
        descricao: constantes.texto.titanicDescricao,
        ulrFoto: constantes.images.titanicURL,
      },
      {
        id: 2,
        nome: "Os Infiltrados",
        descricao: constantes.texto.infiltradosDescricao,
        ulrFoto: constantes.images.infiltradosURL,
      },
      {
        id: 3,
        nome: "Gran Torino",
        descricao: constantes.texto.granTorinoDescricao,
        ulrFoto: constantes.images.granTorinoURL,
      },
      {
        id: 4,
        nome: "Rocky: Um Lutador",
        descricao: constantes.texto.rocklutadorDescricao,
        ulrFoto: constantes.images.rockURL,
      },
      {
        id: 5,
        nome: "Pulp Fiction: Tempo de Violência",
        descricao: constantes.texto.pulpFictionDescricao,
        ulrFoto: constantes.images.pulpFictionURL,
      },
      {
        id: 6,
        nome: "Kill Bill",
        descricao: constantes.texto.killBillDescricao,
        ulrFoto: constantes.images.killBillURL,
      },
    ]);
  }
}

module.exports = FilmeSeeder;
