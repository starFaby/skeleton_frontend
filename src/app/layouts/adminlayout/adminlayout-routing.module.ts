import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from 'src/app/views/nofound/nofound.component';
import { StartComponent } from 'src/app/views/start/start.component';


export const AdminlayoutRoutingModule: Routes = [
  {path: '' , component: StartComponent},
  {path: 'nofound' , component: NofoundComponent}
];
