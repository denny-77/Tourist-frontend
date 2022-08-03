import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TouristFormComponent } from './tourist-form/tourist-form.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';

const routes: Routes = [
  { path: 'tourists-list', component: TouristListComponent },
  { path: 'tourist-form', component: TouristFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
