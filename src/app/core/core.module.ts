import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard'
import { appInterceptorProvider } from './app.interceptor';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    appInterceptorProvider
  ],   
  exports: [ FooterComponent, 
    HeaderComponent]
})
export class CoreModule { }
