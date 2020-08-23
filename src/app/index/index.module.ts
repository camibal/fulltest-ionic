import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { UpdateCityComponent } from './cities/update-city/update-city.component';
import { DeleteCityComponent } from './cities/delete-city/delete-city.component';
import { FootballTeamsComponent } from './football-teams/football-teams.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../services/auth-interceptor.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SaveCityComponent } from './cities/save-city/save-city.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  declarations: [
    IndexPage,
    HomeComponent,
    CitiesComponent,
    FootballTeamsComponent,
    SaveCityComponent,
    UpdateCityComponent,
    DeleteCityComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IndexRoutingModule,
    NgxDatatableModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
})
export class IndexModule { }
