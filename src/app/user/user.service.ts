import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public isLogged: boolean
  constructor() {
    this.isLogged = localStorage.getItem('isLogged') === 'true' ? true : false;
   }

  login(): void {
    this.isLogged = true;
    localStorage.setItem('isLogged', 'true')
  }

  logout(): void {
    this.isLogged = false;
    localStorage.setItem('isLogged', 'false')
  }
}
