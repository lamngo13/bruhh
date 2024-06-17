import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'angapp', pathMatch: 'full'},
  //{path: '', component: AppComponent},
  {path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
