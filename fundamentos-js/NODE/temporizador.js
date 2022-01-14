const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 6', function() {
    console.log('Exec missao 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Missao abortada!')
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 20
regra.second = 05

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Exec missao 2!')
})