import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { AuthService } from '../core/auth.service';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

}