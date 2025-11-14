//Importante um Módulo 'fs' (File System)
const fs = require ('fs');
//Informação de inicio de scrpt
console.log("Iniciando nosso script....");

//2.Definir o conteudo de Mensagem
const dia = new Date()
const usuario = "Tamires Rodrigues Delmondes"
const mensagem = "Log do dia :" + dia.getMonth() + "/" + (dia.getMonth () + 1) + "\n O usuário acessou o sistema:\n" + usuario + " " + dia.getDate() + "/" + (dia.getMonth()+1) + " " + dia.getHours()+ ":" + dia.getMinutes();

//3. Escrever o arquivo de forma síncrone
fs.writeFileSync("arquivo07.txt", mensagem)
try {
    fs.writeFileSync("arquivo07.txt", mensagem)
    console.log("Arquivo criado com sucesso.")
} catch (erro) {
    console.error("Desculpe-me, ocorreu um erro ao escrever o arquivo: ", erro)
}
console.log("Finalizando nosso scrpt.....")