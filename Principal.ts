import { User } from "./User";
import { Chat } from "./Chat";
import { Controller } from "./Controller";

declare function require(msg : string) : any;
var readline = require('readline-sync');

let control : Controller = new Controller();

let status:boolean = true;
console.log("Comando = Função\naU = adicionar usuário\nvU = ver usuários\naG = adcionar grupo\nvG = ver grupo\naPG = adicionar pessoa ao grupo\nrPG = remover pessoa do grupo\neM = enviar mensagem\nvM = ver mensagem\nexit = sair\n");
while (status) {
    let comando:string = readline.question("Digite o comando: ");
    
    switch (comando) {
        case "aU":     
            let nomeUser:string = readline.question("Nome do Usuario: ");           
            console.log(control.cadUser(nomeUser));
        break;

        case "vU":
            console.log(control.verUsers());
        break;

        case "aG":
            let nomeGrupo:string = readline.question("Nome do Grupo: ");
            let nomeUserGrupo:string = readline.question("Nome do Usuario: ");
            console.log(control.addGrupo(nomeGrupo,nomeUserGrupo));
        break;
            
        case "vG":
            let nomeGrupoBusca:string = readline.question("Nome do Grupo: ");
            console.log(control.verGrupo(nomeGrupoBusca));
        break;

        case "aPG":
            let nomeGrupoAdd :string = readline.question("Nome do grupo: ");
            let nomePessoaAdd:string = readline.question("Nome da pessoa: ");
            console.log(control.addPessoaGrupo(nomeGrupoAdd,nomePessoaAdd));
        break;

        case "rPG":
            let grupoRemove:string = readline.question("Nome do grupo: ");
            let nomeRemove:string = readline.question("Nome da pessoa: ");
            console.log(control.removePessoaGrupo(nomeRemove,grupoRemove));
        break;
        
        case "eM":
            let nomeMsg:string = readline.question("Nome da pessoa: ");
            let grupoMsg:string = readline.question("Nome do Grupo: ");
            let msg:string = readline.question("Mensagem: ")
            console.log(control.enviarMsg(msg,nomeMsg,grupoMsg));
        break;

        
        case "vM":
            let nomeMsgB:string =readline.question("Nome da Pessoa: ");
            let grupoMsgB:string =readline.question("Nome do grupo: ");
            console.log(control.verMsg(nomeMsgB,grupoMsgB));
        break;

        case "vV":
            console.log(control.verVisual());
        
        case "exit":
        status = false;
        break;
        default:
        break;
        }
    }