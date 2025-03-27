import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
