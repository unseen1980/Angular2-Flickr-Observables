import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainAppComponent } from './components/app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [MainAppComponent],
  bootstrap: [MainAppComponent]
})
export class AppModule {

}
