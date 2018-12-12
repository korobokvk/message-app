export interface IUsers {
    _id: string;
    username: string;
    password: string;
}
export interface IMessage { 
    _id: string,
    title: string,
    message: string,
    user: string
  };