import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SplitDetailComponent } from './split-detail/split-detail.component';
import { ChartComponent } from './chart/chart.component';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppService } from './app.service';
import { XhrInterceptor }  from './XhrInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavComponent,
    FooterComponent,
    HeroDetailComponent,
    MessagesComponent,
    LoginComponent,
    UserDetailComponent,
    SplitDetailComponent,
    ChartComponent,
    AdminComponent,
    AdminloginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ HeroService, MessageService ,AppService ,AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
