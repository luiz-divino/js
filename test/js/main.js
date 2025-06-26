
function criaPessoa(nome, sobrenome){
    return {
        nome, sobrenome,
        fala: (assunto)=>{
            return `${nome} está falando sobre ${assunto}`
        }
    }
}

const p1 = criaPessoa('luiz', 'divino')
console.log(p1.fala('a copa do mundo de clubes'))