import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FirstModule } from './first/first.module';

@NgModule({
  declarations: [AppComponent,DemoComponent],
  imports: [BrowserModule,FirstModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
