import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashLayoutComponent } from './admin/layout/dash-layout/dash-layout.component';
import { AnalyticsComponent } from './admin/pages/analytics/analytics.component';
import { DashNavComponent } from './admin/components/dash-nav/dash-nav.component';
import { DashSideNavComponent } from './admin/components/dash-side-nav/dash-side-nav.component';
import { DashFooterComponent } from './admin/components/dash-footer/dash-footer.component';
import { WelcomeComponent } from './landing/pages/welcome/welcome.component';
import { WelcomeComponent as WelcomeLayout } from './landing/layout/welcome/welcome.component';
import { DefaultComponent } from './landing/layout/default/default.component';
import { NavbarComponent } from './landing/components/navbar/navbar.component';
import { FooterComponent } from './landing/components/footer/footer.component';
import { HomeComponent } from './landing/pages/home/home.component';
import { WelcomeNavbarComponent } from './landing/components/welcome-navbar/welcome-navbar.component';
import { TreeHomeComponent } from './admin/pages/tree/tree-home/tree-home.component';
import { ChartsModule } from 'ng2-charts';
import { PageComponent } from './iot-simulation/page/page.component';
import { TreeCreateComponent } from './admin/pages/tree/tree-create/tree-create.component';
import { FormsModule } from '@angular/forms';
import { TreeViewComponent } from './admin/pages/tree/tree-view/tree-view.component';
import { TreeEditComponent } from './admin/pages/tree/tree-edit/tree-edit.component';
import { DefaultLayoutComponent } from './iot-simulation/layout/default-layout/default-layout.component';
import { CommonModule } from '@angular/common';
import { TreeSelectionComponent } from './iot-simulation/page/tree-selection/tree-selection.component';
import { TreeUpdateComponent } from './iot-simulation/page/tree-update/tree-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DashLayoutComponent,
    AnalyticsComponent,
    DashNavComponent,
    DashSideNavComponent,
    DashFooterComponent,
    WelcomeComponent,
    WelcomeLayout,
    DefaultComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WelcomeNavbarComponent,
    TreeHomeComponent,
    PageComponent,
    TreeCreateComponent,
    TreeViewComponent,
    TreeEditComponent,
    DefaultLayoutComponent,
    TreeSelectionComponent,
    TreeUpdateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // config
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
