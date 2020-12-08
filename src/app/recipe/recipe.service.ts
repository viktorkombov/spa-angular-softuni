import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe, IUser } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  loadRecipeList(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`http://localhost:3000/api/recipes`);
  }

  loadRecipe(id: string): Observable<IRecipe<IUser>> {
    return this.http.get<IRecipe>(`http://localhost:3000/api/recipes/${id}`);
  }

  saveRecipe(data: any): Observable<IRecipe<IUser>> {
    return this.http.post<IRecipe<any>>(`http://localhost:3000/api/recipes`, data, {withCredentials: true});
  }

  likeRecipe(id: string): Observable<IRecipe> {
    return this.http.put<IRecipe>(`http://localhost:3000/api/recipes/${id}`, {}, {withCredentials: true});
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/recipes/delete/${id}`, {withCredentials: true});
  }

  getEditRecipe(id: string): Observable<IRecipe> {
    return this.http.post<IRecipe>(`http://localhost:3000/api/recipes/edit/${id}`, {withCredentials: true});
  }  

  postEditRecipe(id: string, data): Observable<IRecipe> {
    return this.http.post<IRecipe>(`http://localhost:3000/api/recipes/edit/${id}`, data, {withCredentials: true});
  }
}