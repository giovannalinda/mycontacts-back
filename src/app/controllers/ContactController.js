class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from contact controller');
  }

  show() {
    // obter UM registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
