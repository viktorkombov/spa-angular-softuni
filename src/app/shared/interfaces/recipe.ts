import { IBase } from './base';
import { IUser } from './user';

export interface IRecipe<T = string> extends IBase {
  subscribers: string[];
  recipeName: string;
  necesseryTime: string;
  userId: IUser;
  ingredients: string[];
  difficultyLevel: string;
  imageUrl: string;
  recipeContnet: string;
}