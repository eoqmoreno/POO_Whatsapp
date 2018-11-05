import {Chat} from "./Chat";
export class User{
    private nome:string;
    private chats:Chat[]=new Array();

    constructor(nome:string){
        this.nome = nome;
    }

    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string):void{
        this.nome = nome;
    }

    public getChats():Chat[]{
        return this.chats;
    }
    public setChats(chats: Chat[]):void{
        this.chats = chats;
    }
    public addChat(chat: Chat){
        this.chats.push(chat);
    }
}