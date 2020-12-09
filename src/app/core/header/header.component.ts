import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  hideNavigation = false;

  get isLogged$(): boolean {
    return this.authService.isLogged$;
  }
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }

  getUserHander(): void {
    this.authService.getCurrentUserProfile().subscribe(() => this.router.navigate(['/user/profile']))
  }

  ngOnDestroy(): void {
  }
}