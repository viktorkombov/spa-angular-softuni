import { IBase } from './base';

export interface IUser extends IBase {
  recipes: string[];
  name: string;
  surname: string;
  profilePicture: string;
  username: string;
  password: string;
}