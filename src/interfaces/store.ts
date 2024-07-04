
export interface IAuthUser {
  name?: string;
  publicKey: string;
  secretKeyHex: string;
}

export interface IAuthReducer {
  user: IAuthUser;
}

export interface IStore {
  auth: IAuthReducer
}