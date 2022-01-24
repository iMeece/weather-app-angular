import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TopContainerComponent } from './components/top-container/top-container.component';
import { TimeBoxComponent } from './components/time-box/time-box.component';
import { StatusBoxComponent } from './components/status-box/status-box.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { BotContainerComponent } from './components/bot-container/bot-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TopContainerComponent,
    TimeBoxComponent,
    StatusBoxComponent,
    InfoBoxComponent,
    BotContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
