import { Msg } from "./msg";
import { User } from "./User";

export class Chat{
    private user : User;
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
    public getPessoas():User[]{
        return this.users;
    }
}