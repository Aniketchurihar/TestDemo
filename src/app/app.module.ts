import { VishakhaModule } from './vishakha/vishakha.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AniketComponent } from './aniket/aniket.component';
import { YashComponent } from './yash/yash.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AniketComponent,
    YashComponent
  ],
  imports: [
    BrowserModule,
    VishakhaModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
