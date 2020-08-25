import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpolyeeListComponent } from './empolyee-list/empolyee-list.component';
import { EmpolyeeDetailComponent } from './empolyee-detail/empolyee-detail.component';
import {EmpolyeeService} from './empolyee.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    EmpolyeeListComponent,
    EmpolyeeDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmpolyeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
