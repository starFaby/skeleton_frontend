import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminlayoutRoutingModule } from './adminlayout-routing.module';
import { RouterModule } from '@angular/router';
import { StartComponent } from 'src/app/views/start/start.component';
import { AngularmaterialModule } from 'src/app/util/angularmaterial/angularmaterial.module';


@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminlayoutRoutingModule),
    AngularmaterialModule
  ]
})
export class AdminlayoutModule { }
