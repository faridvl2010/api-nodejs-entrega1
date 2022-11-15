export interface Rol {
    ID_ROL:number,
    NAME:String,
    DESCRIPTION:String,
    STATE:String,
    CREATION_DATE:Date
}

export interface RolCreater {
    NAME:String,
    DESCRIPTION:String,
    STATE:String
}

export interface SendRol extends Omit<Rol,'id'>{}