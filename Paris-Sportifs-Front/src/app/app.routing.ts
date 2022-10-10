import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginPageComponent
  },
  {
   path: 'Home',
   component: HomeComponent
 },
 {
   path: 'team',
   component: TeamDetailsComponent 
}
]
