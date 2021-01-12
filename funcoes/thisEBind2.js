function pessoa(){
    this.idade = 0
    const self = this// recurso para driblar o problema do this
    setInterval/* É um temporizador*/(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new pessoa