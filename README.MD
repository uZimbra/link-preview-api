<h1 align="center">
  Link Preview API
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

<p align="center">
  <p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ExpressJS](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.JS](https://nodejs.org/en/)

<br>

## 🗒 Projeto

O projeto é uma aplicação que retorna um JSON com informações de uma página através do link para a criação da pre-visualização da mesma.

<br>

## 💻 Instalação

```bash
# Clone this repository
$ git clone https://github.com/uZimbra/link-preview-api.git

# Go into the repository
$ cd link-preview-api

# Install dependencies
$ yarn 
# or
$ npm install

# Start
$ yarn dev

```

<br>

## 🌐 Rotas

<img src="https://img.shields.io/badge/get-green"/>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;http://localhost:3333/api/v1/get-preview

Parametros

- Body: required
  
```javascript

  // Parameter content type: application/json

  {
    "url": "http://example.com/"
  }

```
Anatomia do Retorno

``` typescript
{
  url: string,
  domain: string,
  title: string,
  img?: string,
  description: string
}
```

