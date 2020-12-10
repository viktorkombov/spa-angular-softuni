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
  isLoading = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  }

  changeHandler(data: any): void {
    console.log(data);
  }

  submitFormHandler(formValue: { username: string, password: string }): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login(formValue).subscribe(
      {
        next: (data) => {
            this.isLoading = false
            this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = 'Потребителското име или паролата са грешни!';
          this.isLoading = false;
        }
      }
    );
  }

}