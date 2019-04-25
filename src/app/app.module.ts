import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListingComponent } from './components/listing/listing.component';
import { PageTypesComponent } from './components/page-types/page-types.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListingComponent,
    PageTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
