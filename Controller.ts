import { User } from "./User";
import { Chat } from "./Chat";

export class Controller {

    private users : User[] = new Array();
    private chats: Chat[] = new Array();
    private status:boolean = true;
    
    public buscaUser(nome:string):User|undefined{
        if(this.users.length>0){
            for(let i of this.users){
                if(i.getNome() == nome){
                    return i; 
                }else{
                    return undefined;
                }
            }
        return undefined;
        }
    }
    
    public cadUser(nome:string):string|void{
        if(this.buscaUser(nome) == undefined){
            this.users.push(new User(nome));
        }else{
            return this.buscaUser(nome).getNome+" já existe";
        }
    }

    public buscarGrupo(nome:string):Chat|undefined{
        if(this.chats.length>0){
            for(let i of this.chats){
                if(i.getNome() == nome){
                    return i;
                }else{
                    return undefined;
                }
            }
        }else{
            return undefined;
        }
    }
    
    public addGrupo(nome:string,nomeuser:string):void|string{
        if(this.buscarGrupo(nome) == undefined){
            let nomeuse:any = this.buscaUser(nomeuser);
            if (nomeuse != undefined) {
                let chat:Chat = new Chat(nome,nomeuse)
                this.chats.push(chat)
                nomeuse.addChat(chat);
                return "Grupo criado";
            }else{
                return "Usuário não existente"
            }
        }else{
            return "Grupo já existente";
        }
    }

    public verGrupo(nome:string):string{
        if(this.buscarGrupo(nome) != undefined){
            let nomeGrupoBusca = this.buscarGrupo(nome);
            let nomes:string = "[";
            for(let i of nomeGrupoBusca.getPessoas()){
                nomes += i.getNome()+" ";
            }
            nomes += "]";
            return nomes;
        }else{
            return "Grupo não existe";
        }
    }
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
    
    
            default:
                break;
        }
    }
    
*/




}