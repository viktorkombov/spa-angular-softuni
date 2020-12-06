import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  loadRecipeList(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`http://localhost:3000/api/recipes`);
  }

  // loadRecipe(id: string): Observable<IRecipe<IPost>> {
  //   return this.http.get<IRecipe<IPost>>(`/recipes/${id}`);
  // }

  saveRecipe(data: any): Observable<IRecipe<any>> {
    return this.http.post<IRecipe<any>>(`http://localhost:3000/api/recipes`, data);
  }

}