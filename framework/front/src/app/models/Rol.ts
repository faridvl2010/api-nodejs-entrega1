export interface Rol {
    ID_ROL:number,
    NAME:String,
    DESCRIPTION:String,
    STATE:String,
    CREATION_DATE:Date
}

export interface SendRol extends Omit<Rol,'id'>{}