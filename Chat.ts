import { Msg } from "./msg";
import { User } from "./User";

export class Chat{
    private nome:string;
    private msgs : Msg[] = new Array();
    private users : User[] = new Array();
    constructor(nome:string, user:User){
        this.nome = nome;
        this.users.push(user);
        
    }

    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string):void{
        this.nome = nome;
    }

    public getMsg():any{
        return this.msgs;
    }


    public addPessoa(user:User):void{
        this.users.push(user);
    }
    public removePessoa(user:User):string{
        if(this.users.length>0){
            for(let i in this.users){
                if(this.users[i] == user){
                    this.users.splice(Number(i),1);
                    return "Usuario removido"
                }
            }
            return "Usuário não encontrado"
        }else{
            return "vazio";
        }
    }

    public getPessoas():User[]{
        return this.users;
    }

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

    public buscarUser(nome:string):User|undefined{
        if(this.users.length>0){
            for(let i of this.users){
                if(i.getNome() == nome){
                    return i;
                }    
            }
            return undefined;
        }else{
            return undefined;
        }
    }

    public verMsgs(nome:User):string{
        if(this.msgs.length>0){
            let msgss:string = "";
            for(let i of this.msgs){
                    if(i.verVisualizacao(nome) == 1){
                        msgss += i.getMsg() + "\n";
                        i.visualizou(nome);
                    }
                }
                if(msgss==""){
                   return "Nenhuma mensagem" 
                }
                return msgss;
            }else{
            return "Vazio";
        }
    }

    public addMsg(msg:Msg):void{
        this.msgs.push(msg);
    }
}