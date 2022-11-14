export interface Usuario {
    ID_USUARIOS: number;
    NAME: String;
    LAST_NAME: String;
    EMAIL: String;
    TYPE_DOCUMENT: String;
    DOCUMENT:String;
    STATE:String;
    PASSWORD:string;
}

export interface SendUsuario extends Omit<Usuario,'ID_USUARIOS'> {}
export interface GetUsuario extends Omit<Usuario,'ID_USUARIOS' | 'NAME' | 'LAST_NAME' | 'TYPE_DOCUMENT' | 'DOCUMENT' | 'STATE'> {}