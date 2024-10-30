import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PerfumsComponent } from './components/pages/dashboard/perfums/perfums.component';

const routes: Routes = [
  {
    path: '',
    title: 'Dashboard - AyF',
    component: PerfumsComponent,
    children: [
      {
        path: '',
        component: PerfumsComponent
      }
    ]
  },
  {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
