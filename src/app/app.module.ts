import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import {MatMenuModule} from '@angular/material/menu';







@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    FormulaireComponent,
    MenuComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
  
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
