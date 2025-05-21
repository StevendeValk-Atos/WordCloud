import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularD3CloudModule } from 'angular-d3-cloud';
import { BrandHeaderComponent } from './components/molecules/brand-header/brand-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    AngularD3CloudModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
