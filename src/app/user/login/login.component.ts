import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  errorMessage = '';
  loginErr: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) { this.loginErr = this.authService.loginErr}

  ngOnInit(): void {
  }

  changeHandler(data: any): void {
    console.log(data);
  }

  submitFormHandler(formValue: { username: string, password: string }): void {
    console.log(formValue)
    this.errorMessage = '';
    this.authService.login(formValue).subscribe(
      {
        next: (data) => {
          try {
            if (this.loginErr) {this.loginErr = false; throw new Error()}
            this.router.navigate(['/']);
          } catch (err) {
            this.errorMessage = 'Потребителското име или паролата са грешни!';
          }
        },
        error: (err) => {
          this.errorMessage = 'Потребителското име или паролата са грешни!';
        }
      }
    );
  }

}