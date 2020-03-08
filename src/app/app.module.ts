import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SliderComponent } from './slider/slider.component';
import { ThumbnailComponent } from './slider/thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    SliderComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
