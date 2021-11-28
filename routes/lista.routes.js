
const express = require("express");
const ListasController = require("./../controllers/listas.controller");

const listasController = new ListasController();

const router = express.Router();

router.get("/", listasController.getListas);

router.get("/:id", listasController.getListaById);

router.post("/add", listasController.createlista)

router.put("/:id", listasController.editLista);
router.delete("/:id", listasController.deleteLista);
module.exports = router;