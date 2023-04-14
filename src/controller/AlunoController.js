const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

module.exports = {
    async criarAluno(req, res) {
        const {nome, curso, professorId} = req.body

        const alunoExistente = await prisma.aluno.findFirst({
            where: {
                nome: nome,
                curso: curso
            }
        })

        if(alunoExistente) {
            return res.json("Esse aluno já foi criado")
        }

        try {
            const aluno = await prisma.aluno.create({
                data: {
                    nome,
                    curso,
                    professorId
                }
            })
            res.json(aluno);
        } catch (error) {
            console.error(error)
            res.status(500).json({error: "Erro ao criar novo aluno"})
        }
    }
}