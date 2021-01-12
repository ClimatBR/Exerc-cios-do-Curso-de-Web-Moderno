class Avo{
    constructor(sobrenome = 'Salvador'){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)
        this.profissão = profissão
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
const pai = new Pai
console.log(pai)