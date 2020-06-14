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
import { DefaultComponent } from './landing/layout/default/default.component';
import { NavbarComponent } from './landing/components/navbar/navbar.component';
import { FooterComponent } from './landing/components/footer/footer.component';
import { HomeComponent } from './landing/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashLayoutComponent,
    AnalyticsComponent,
    DashNavComponent,
    DashSideNavComponent,
    DashFooterComponent,
    WelcomeComponent,
    DefaultComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // config
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
