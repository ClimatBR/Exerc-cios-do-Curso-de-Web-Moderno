const escola = [{
    nome: 'Turma1',
    alunos: [
        {nome: 'Gustavo',
         nota: 8.3},
         {nome: 'Maria',
          nota: 6.7}]},
    {nome: 'Turma2',
    alunos: [
        {nome: 'Carlos',
         nota: 6.5},
        {nome: 'Kátia',
         nota: 7.8}]}]

const getAluno = aluno => aluno.nota
const getTurma = turma => turma.alunos.map(getAluno)
const resultado = escola.map(getTurma)
console.log(resultado)

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas = escola.flatmap(getTurma)
console.log(notas)