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
import { SelectedSuggestionComponent } from './selected-suggestion/selected-suggestion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountTimerComponent,
    CountDublicateValueComponent,
    OptScreenComponent,
    FocusNextInputDirective,
    FileExploreComponent,
    SelectedSuggestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
