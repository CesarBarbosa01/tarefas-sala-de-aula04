//npx prisma init --datasource-provider sqlite

const { Router } = require("express")
const ProfessorController = require("./controller/ProfessorController")
const AlunoController = require("./controller/AlunoController")

const router = Router()

router.post("/criarProfessor", ProfessorController.criarProfessor)
router.get("/professor/:id", ProfessorController.buscarProfessor)

router.post("/criarAluno", AlunoController.criarAluno)
router.get("/:professorid/alunos", AlunoController.buscarAluno)

module.exports = { router }