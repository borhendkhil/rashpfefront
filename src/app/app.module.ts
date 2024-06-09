import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleService } from './services/role.service';
import { LoginModule } from './components/login/login.module';
import { AuthInterceptor } from './services/auth.interseptor';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true},
       RoleService

  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    LoginModule

  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
