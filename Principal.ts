import { User } from "./User";
import { Chat } from "./Chat";
import { Controller } from "./Controller";

declare function require(msg : string) : any;
var readline = require('readline-sync');

let control : Controller = new Controller();

let status:boolean = true;
while (status) {
    let comando:string = readline.question("Digite o comando: ");

    switch (comando) {
        case "addUser":     
            let nomeUser:string = readline.question("Nome do Usuario: ");           
            control.cadUser(nomeUser);
        break;

        case "addGrupo":
            let nomeGrupo:string = readline.question("Nome do Grupo: ");
            let nomeUserGrupo:string = readline.question("Nome do Usuario: ");
            console.log(control.addGrupo(nomeGrupo,nomeUserGrupo));
        break;
            
        case "verGrupo":
            let nomeGrupoBusca:string = readline.question("Nome do Grupo: ");
            console.log(control.buscarGrupo(nomeGrupoBusca));
        break;
        /*
            case "addPessoaGrupo":
                if(chats.length>0){
                    let nomeGrupoAdd :string = readline.question("Nome do grupo: ");
                    let nomePessoaAdd:string = readline.question("Nome da pessoa: ");
                    for(let i of chats){
                        if(i.getNome() == nomeGrupoAdd){
                            for(let x of users){
                                if(x.getNome() == nomePessoaAdd){
                                    for(let y of i.getPessoas()){
                                        if(y.getNome() != x.getNome()){
                                            i.addPessoa(x);
                                            x.addChat(i);
                                        }else{
                                            console.log("Usuario já cadastrado");
                                        }
                                    }
                                }else{
                                    console.log("Usuario não existente");
                                }
                            }
                        }else{
                            console.log("Grupo não existe");
                        }
                    }
                }
            break;
    
    */
            default:
                break;
        }
    }