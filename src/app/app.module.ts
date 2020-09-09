import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BluePrintComponent } from './blue-print/blue-print.component';
import { ServerNameComponent } from './server-name/server-name.component';

@NgModule({
  declarations: [
    AppComponent,
    BluePrintComponent,
    ServerNameComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
