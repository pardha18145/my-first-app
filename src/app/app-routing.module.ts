import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomerSignupComponent } from './customerSignUp/customersignup.component';
import { DriverSignupComponent } from './driverSignUp/driversignup.component';

const routes: Routes = [
  // Define your routes here
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'customersignup', component: CustomerSignupComponent },
  { path: 'driversignup', component: DriverSignupComponent },
  { path: '**', component: MainComponent } // Wildcard route for handling unknown routes
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
