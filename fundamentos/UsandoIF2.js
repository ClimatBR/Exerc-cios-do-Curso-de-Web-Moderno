function teste1(num){
    if(num>=7)
    console.log('Aprovado')
    console.log('final')
}
teste1(6)
teste1(8)

function teste2(num){
    if(num>=7);{
    console.log(num)}
    console.log('final')
}
teste2(6)//vai executar mesmo sendo menor que 7, pois eu coloquei um ponto e vírgula onde não devia!!!
teste2(8)