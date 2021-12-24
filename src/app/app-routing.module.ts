import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './MyComponents/aboutus/aboutus.component';
import { HomeComponent } from './MyComponents/home/home.component';
import {VisitsComponent } from './MyComponents/visits/visits.component';
import {RegisterComponent } from './MyComponents/register/register.component';
const routes: Routes = [
  { path:'aboutus',component : AboutusComponent },
  { path:'',component : HomeComponent },
  { path:'site-visits',component : VisitsComponent },
  { path:'signup',component : RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
]
})
export class AppRoutingModule { }
