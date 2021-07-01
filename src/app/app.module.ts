import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormerrorComponent } from './layout/shared/formerror/formerror.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormerrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
