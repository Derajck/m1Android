export interface UserType {
  name: String;
}

export interface User {
  _id?: any;
  userType?: UserType;
  firstName?: String;
  lastName?: String;
  login?: String;
  password?: String;
}

export interface AuthenticationResponse {
  user: User;
  token: string;
}
