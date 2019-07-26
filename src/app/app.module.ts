import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebCoreModule } from '@web-core';
import { WebSharedModule } from '@web-shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './module/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    WebCoreModule,
    AppRoutingModule,
    LayoutModule,
    WebSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
