export interface UsuarioLog {
    ID:string,
    EMAIL: String,
    PASSWORD:string
}

export interface GetUser extends Omit<UsuarioLog,'ID'>{}