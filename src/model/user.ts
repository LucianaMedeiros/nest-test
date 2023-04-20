export class User {

    public _id: string;
    public name: string = "";
    public userName: string = '';
    public email: string = '';
    public password: string = "";
    public tokens : string = "";
    public perfil : string = "";
    public nivel : number = 1;
    public uuid : string = ""
    public dataCreated  :Date = new Date();
    public dataUpdated  : Date = new Date();
 
}
