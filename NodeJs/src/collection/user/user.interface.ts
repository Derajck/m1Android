export interface User {
  _id?: any;
  firstName?: String;
  lastName?: String;
  login?: String;
  password?: String;
}

export interface AuthenticationResponse {
  user: User;
  token: string;
}
