import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { DetailsComponent } from './details/details.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewpageComponent } from './viewpage/viewpage.component';

const routes: Routes = [
  {path:"",component:LandingpageComponent},
{path:"emailpage",component:EmailpageComponent},  
{path:"viewpage",component:ViewpageComponent},
{path:"details",component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
