import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
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
