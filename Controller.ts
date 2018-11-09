import { User } from "./User";
import { Chat } from "./Chat";
import { Msg } from "./Msg";

export class Controller {
    private users : User[] = new Array();
    private chats: Chat[] = new Array();

    public buscaUser(nome:string):User|undefined{
        if(this.users.length>0){
            for(let i of this.users){
                if(i.getNome() == nome){
                    return i; 
                }
            }
        return undefined;
        }
    }
    
    public verUsers():string{
        if(this.users.length>0){
            let nomes:string = "["
            for(let i of this.users){
                nomes += i.getNome() + " ";
            }
            nomes+="]";
            return nomes;
        }
    }

    public cadUser(nome:string):string|void{
        if(this.buscaUser(nome) == undefined){
            this.users.push(new User(nome));
            return "Usuario cadastrado";
        }else{
            return this.buscaUser(nome).getNome()+" já existe";
        }
    }

    public buscarGrupo(nome:string):Chat|undefined{
        if(this.chats.length>0){
            for(let i of this.chats){
                if(i.getNome() == nome){
                    return i;
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

    public addPessoaGrupo(grupo:string,nome:string):string{
        if(this.buscaUser(nome)!=undefined){
            let pessoa:any = this.buscaUser(nome);
            if(this.buscarGrupo(grupo) != undefined){
                let grupob:any = this.buscarGrupo(grupo);
                for(let i of grupob.getPessoas()){
                    if(i.getNome()==pessoa.getNome()){
                        return "Usuario já cadastrado";
                    }else{
                        pessoa.addChat(grupob);
                        grupob.addPessoa(pessoa);
                        return pessoa.getNome() + " entrou no " + grupob.getNome();
                    }
                }
            }else{
                return "Grupo não existe";
            }
        }else{
            return "Usuario não existe";
        }
    }

    public removePessoaGrupo(nome:string,grupo:string):string{
        if(this.buscarGrupo(grupo)!=undefined){
            if(this.buscaUser(nome)!=undefined){
                return this.buscarGrupo(grupo).removePessoa(this.buscaUser(nome));
                //  "Removido do Grupo"
            }else{
                return "Nome invalido";
            }
        }else{
            return "Grupo não encontrado"
        }
    }

    public enviarMsg(msg:string,nome:string,grupo:string):string{
        if(this.buscarGrupo(grupo)!=undefined){
            let grupob:any = this.buscarGrupo(grupo);
            if(grupob.buscaUser(nome) != undefined){
               let msgs:any = new Msg(grupob.buscaUser(nome),msg);
               grupob.addMsg(msgs);
               return "Mensagem enviada";
            }else{
                return "Usuario não está no grupo"
            }
        }else{
            return "Grupo não encontrado"
        }
    }

    public verMsg(nome:string, grupo:string):string{
        if(this.buscarGrupo(grupo)!=undefined){
            if(this.buscarGrupo(grupo).buscarUser(nome)!=undefined){
                return this.buscarGrupo(grupo).verMsgs(this.buscarGrupo(grupo).buscarUser(nome));
            }
        }else{
            return "Grupo não encontrado"
        }
    }

    public verVisual(){
        if(this.chats.length>0){
            return this.chats[0].verVis();
        }
    }

}