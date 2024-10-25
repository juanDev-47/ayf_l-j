import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './components/pages/pages.module';
import { PerfumService } from './core/services/perfum/perfum.service';
import { AtomsModule } from './components/atoms/atoms.module';
import { OrganismsModule } from './components/organisms/organisms.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    AtomsModule,
    OrganismsModule
  ],
  providers: [PerfumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
