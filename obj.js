const deadpool = {
    nome: `DeadPool`,
    diretor: `O diretor do filme DeadPool foi Tim Miller`,
    ano: `O filme DeadPool foi lançado me 11 de fevereiro de 2016`,
    elenco: [`Ryan Reynolds`, `Morena Baccarin`, `Ed Skrein`],
    viOFilme: true,
}
console.log(deadpool.nome)
console.log(deadpool.diretor)
console.log(deadpool.ano)
console.log(deadpool["elenco"])
console.log(deadpool["viOFilme"])
const pessa = {
    nome: `Marcelo`,
    idade: 20,
    musica: `Underground`,
}
console.log(`O nome da pessoa é ${pessa.nome} e ele tem ${pessa.idade} anos e gosta muito de musica ${pessa.musica} `)

deadpool.personagens = [`Deadpool`, `Vanessa Carlysle`, `Ajax / Francis`,]

console.log(`O personagem do ${deadpool.elenco[0]} é o ${deadpool.personagens[0]}. A personagem da ${deadpool.elenco[1]} é a ${deadpool.personagens[1]}. O personagem do ${deadpool.elenco[2]} é o ${deadpool.personagens[2]}`)

deadpool.elenco[0] = "xuxa"

console.log(`O personagem do ${deadpool.elenco[0]} é o ${deadpool.personagens[0]}. A personagem da ${deadpool.elenco[1]} é a ${deadpool.personagens[1]}. O personagem do ${deadpool.elenco[2]} é o ${deadpool.personagens[2]}`)

console.log("")

console.log(deadpool.nome)
console.log(deadpool.diretor)
console.log(deadpool.ano)
console.log(deadpool["elenco"])
console.log(deadpool["viOFilme"])
console.log(deadpool["personagens"])