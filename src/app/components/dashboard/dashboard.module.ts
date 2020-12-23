import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ContentTranslateComponent } from './content-translate/content-translate.component';
import { ActionTranslateComponent } from './action-translate/action-translate.component';


@NgModule({
  declarations: [DashboardComponent, ContentTranslateComponent, ActionTranslateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
