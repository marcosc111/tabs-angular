import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsMainComponent } from './components/tabs-main.component';
import { TabOptionComponent } from './components/tab-option.component';
import { TabContentComponent } from './components/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsMainComponent,
    TabOptionComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
