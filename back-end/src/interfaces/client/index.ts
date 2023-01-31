export interface IClientRequest {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IClient extends IClientRequest {
  id: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}
