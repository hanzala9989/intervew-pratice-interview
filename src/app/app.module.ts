import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountTimerComponent } from './count-timer/count-timer.component';
import { FormsModule } from '@angular/forms';
import { CountDublicateValueComponent } from './count-dublicate-value/count-dublicate-value.component';
import { OptScreenComponent } from './opt-screen/opt-screen.component';
import { FocusNextInputDirective } from './focus-next-input.directive';
import { FileExploreComponent } from './file-explore/file-explore.component';

@NgModule({
  declarations: [
    AppComponent,
    CountTimerComponent,
    CountDublicateValueComponent,
    OptScreenComponent,
    FocusNextInputDirective,
    FileExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
