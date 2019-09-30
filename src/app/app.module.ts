import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material';
import { GaHomeComponent } from './ga-home/ga-home.component';
import { QaHomeComponent } from './qa-home/qa-home.component';
import { DrcHomeComponent } from './drc-home/drc-home.component';
import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
  { path: 'ga-home', component: GaHomeComponent },
  { path: 'qa-home', component: QaHomeComponent },
  { path: 'drc-home', component: DrcHomeComponent },
  

];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    GaHomeComponent,
    QaHomeComponent,
    DrcHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
