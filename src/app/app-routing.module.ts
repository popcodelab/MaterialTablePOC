import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedalListComponent} from "./medals-manager/medal-list/medal-list.component";

const routes: Routes = [
    {path: 'medals', component: MedalListComponent},
  { path: '', redirectTo: 'medals' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
