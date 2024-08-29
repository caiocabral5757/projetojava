let pokemons = prompt("Escolha entre o Bulbasauro, Charmander ou o Squirtle.")
switch (pokemons){
    case `Charmander`:
        console.log("Seu pokemon é do tipo fogo, parabéns.")
        break
    case `Squirtle`:
        console.log("Seu pokemon é do tipo água, parabéns.")
        break
    case `Bulbasauro`:
        console.log("Seu pokemo é tipo planta e veneno, parabéns.")
        break
    default:
        console.log("Você digitou errado.")
        break
}