import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DefaultComponent } from './landing/layout/default/default.component';
import { WelcomeComponent } from './landing/pages/welcome/welcome.component';
import { HomeComponent } from './landing/pages/home/home.component';
import { DashLayoutComponent } from './admin/layout/dash-layout/dash-layout.component';
import { AnalyticsComponent } from './admin/pages/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
  {
    path: 'admin',
    component: DashLayoutComponent,
    children: [{ path: '', component: AnalyticsComponent }],
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
