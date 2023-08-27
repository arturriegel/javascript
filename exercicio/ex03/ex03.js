var idade = 100
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
    console.log('Voto Opcional')
} else if (idade >= 18 && idade < 66) {
    console.log('Voto Obrigatório')
} else {
    console.log('Voto Opcional')
}