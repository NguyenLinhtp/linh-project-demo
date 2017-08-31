import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { HomeComponent } from './home.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import {NotFountComponent} from './notfount.component';
import {EmployeeDetailsComponent} from './employee-detail.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFountComponent,
    EmployeeDetailsComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
