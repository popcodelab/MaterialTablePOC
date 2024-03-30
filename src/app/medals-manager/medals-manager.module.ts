import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MedalListComponent} from "./medal-list/medal-list.component";
import {MedalDataService} from "./medals-result-service";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule } from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

const medalListRoutes: Routes = [
  { path: 'medals', component: MedalListComponent},

];

@NgModule({
  declarations: [MedalListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(medalListRoutes),
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers:[MedalDataService] // The service is injected now for the module only
})
export class MedalsManagerModule { }
