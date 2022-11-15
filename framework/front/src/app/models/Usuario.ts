export interface Usuario {
    ID_USUARIOS: number,
    NAME: string,
    LAST_NAME: String,
    EMAIL: string,
    TYPE_DOCUMENT: string,
    DOCUMENT:string,
    STATE:string,
    PASSWORD:string,
}

export interface UserLogin{
    EMAIL:string,
    PASSWORD:String
}

export interface id{
    ID_USUARIOS:number
}

export interface Usuario {}
export interface SendLogUsuario  {}
export interface SendUsuario extends Omit<Usuario,'ID_USUARIOS'> {}
export interface GetUsuario extends Omit<Usuario,'ID_USUARIOS' | 'NAME' | 'LAST_NAME' | 'TYPE_DOCUMENT' | 'DOCUMENT' | 'STATE'> {}