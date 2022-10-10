import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes } from './app.routing';
import { TeamsComponent } from './pages/teams/teams.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AgGridModule } from 'ag-grid-angular';
import { BackComponentComponent } from './pages/component/back-component/back-component.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HomeComponent,
    TeamDetailsComponent,
    LoginPageComponent,
    BackComponentComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
