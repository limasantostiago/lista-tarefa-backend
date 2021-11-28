
const ListasService = require('./../services/lista.service');
const listasService = new ListasService;

class ListasController {
  getListas = async (req, res) => {
    const listas = await listasService.findAll();
    res.send(listas);
  }

  getListaById = async (req, res) => {
    const lista = await listasService.findById(req.params.id);
    res.send(lista);
  }

  createlista = async (req, res) => {
    const lista = req.body;
    if(!req.body){
      return;
    }
    await listasService.create(lista)
    .then(() => {
      res.send({message: `Tarefa ${lista.titulo} Cadastrada com sucesso`})
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor: ${err}`})
    })
  }

  editLista = async (req, res) => {
    const idParam = req.params.id;
    const listaEdit = req.body;
    await listasService.edit(idParam, listaEdit)
    .then(() => {
      res.send({message: `tarefa Editada com sucesso`})
    })
    .catch( err => { 
      res.status(500).send({message: `Erro: ${err}`})
    })
  }

  deleteLista = async (req, res) => {
    const idParam = req.params.id;
    await listasService.delete(idParam)
    .then(() => {
      res.send({message: 'Excluido com sucesso'})
    })
    .catch(err => {
      res.status(500).send({error: `Error: ${err}`});
    })
  }
}

module.exports = ListasController;