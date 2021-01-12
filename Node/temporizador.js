const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 0',function(){
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
},20000)

//setImmediate serve para parar o contador no momento definido
//setInterval serve para definir um intervalo para o contador

const regra = new schedule.RecurrenceRule()// um tempo recorrente registrado
regra.dayOfWeek = [new schedule.Range(0,5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a tarefa 2', new Date().getSeconds())
})