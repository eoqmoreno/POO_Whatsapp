import { User } from "./User";
import { Chat } from "./Chat";

export class Msg{
    private nome: User;
    private msg:string;
    private visualizacoes: User[] = new Array();

    constructor(nome:User,msg:string){
        this.nome = nome;
        this.msg = msg;
        this.visualizacoes.push(nome);
    }

    public getNome():string{
        return this.nome.getNome();
    }
    public setNome(nome:User):void{
        this.nome = nome;
    }

    public getMsg():string{
        return this.msg;
    }

    public visualizou(nome:User){
        this.visualizacoes.push(nome);
    }

    public verVisualizacao(user:User):number{
        if(this.visualizacoes.length>0){
            for(let i of this.visualizacoes){
                if(i == user){
                    return 0;
                }
            }
            return 1;
        }else{
            return 2;
        }
    }
}