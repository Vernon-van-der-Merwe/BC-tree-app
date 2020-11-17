import { TreeUpdateComponent } from './iot-simulation/page/tree-update/tree-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DefaultComponent } from './landing/layout/default/default.component';
import { WelcomeComponent } from './landing/pages/welcome/welcome.component';
import { WelcomeComponent as WelcomeLayout } from './landing/layout/welcome/welcome.component';
import { HomeComponent } from './landing/pages/home/home.component';
import { DashLayoutComponent } from './admin/layout/dash-layout/dash-layout.component';
import { AnalyticsComponent } from './admin/pages/analytics/analytics.component';
import { TreeHomeComponent } from './admin/pages/tree/tree-home/tree-home.component';
import { PageComponent } from './iot-simulation/page/page.component';
import { TreeViewComponent as Treesim } from './iot-simulation/page/tree-view/tree-view.component';
import { TreeCreateComponent } from './admin/pages/tree/tree-create/tree-create.component';
import { TreeViewComponent } from './admin/pages/tree/tree-view/tree-view.component';
import { TreeEditComponent } from './admin/pages/tree/tree-edit/tree-edit.component';
import { DefaultLayoutComponent } from './iot-simulation/layout/default-layout/default-layout.component';
import { TreeSelectionComponent } from './iot-simulation/page/tree-selection/tree-selection.component';

const routes: Routes = [
  {
    path: 'iotsim',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: TreeSelectionComponent },
      { path: ':id', component: TreeUpdateComponent },
    ],
  },
  {
    path: '',
    component: WelcomeLayout,
    children: [{ path: '', component: WelcomeComponent }],
  },
  {
    path: 'welcome',
    component: DefaultComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'admin',
    component: DashLayoutComponent,
    children: [
      { path: '', component: AnalyticsComponent },
      {
        path: 'tree-management',
        children: [
          { path: '', component: TreeHomeComponent },
          { path: 'create', component: TreeCreateComponent },
          {
            path: ':id',
            children: [
              { path: '', component: TreeViewComponent },
              { path: 'edit', component: TreeEditComponent },
            ],
          },
        ],
      },
    ],
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
