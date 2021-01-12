const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anônimo)

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}
else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\r\n','')

        process.stdout.write(`Fala ${nome}!!\r\n `)
        process.exit()
    })
}