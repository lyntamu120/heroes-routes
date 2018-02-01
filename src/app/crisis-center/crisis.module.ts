import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    FormsModule
  ],
  declarations: [
      CrisisListComponent,
      CrisisDetailComponent,
      CrisisCenterComponent,
      CrisisCenterHomeComponent
  ]
})
export class CrisisModule { }
