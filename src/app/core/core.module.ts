import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard'
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ FooterComponent, HeaderComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    appInterceptorProvider
  ]
})
export class CoreModule { }