import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe, IUser } from '../shared/interfaces';
import { Observable, of } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'

@Injectable()
export class RecipeService {
  recipe: IRecipe | null
  constructor(private http: HttpClient) { }

  loadRecipeList(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`https://your-recipes-expressjs-server.herokuapp.com/api/recipes`);
  }

  loadRecipe(id: string): Observable<IRecipe<IUser>> {
    return this.http.get<IRecipe>(`https://your-recipes-expressjs-server.herokuapp.com/api/recipes/${id}`).pipe(
      tap(((recipe: IRecipe) => this.recipe = recipe)),
      catchError(() => { this.recipe = null; return of(null); })
    )
  }

  saveRecipe(data: any): Observable<IRecipe<IUser>> {
    return this.http.post<IRecipe<any>>(`https://your-recipes-expressjs-server.herokuapp.com/api/recipes`, data, {withCredentials: true});
  }

  likeRecipe(id: string): Observable<IRecipe> {
    return this.http.put<IRecipe>(`https://your-recipes-expressjs-server.herokuapp.com/api/recipes/${id}`, {}, {withCredentials: true});
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.post<IRecipe>(`https://your-recipes-expressjs-server.herokuapp.com/api/recipes/delete/${id}`, {}, {withCredentials: true});
  }  

  editRecipe(id: string, data): Observable<IRecipe> {
    return this.http.post<IRecipe>(`https://your-recipes-expressjs-server.herokuapp.com/api/recipes/edit/${id}`, data, {withCredentials: true});
  }
}