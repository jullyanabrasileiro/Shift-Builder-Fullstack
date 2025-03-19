import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MyShiftsComponent } from './components/my-shifts/my-shifts.component';
import { AddShiftComponent } from './components/add-shift/add-shift.component';
import { EditShiftComponent } from './components/edit-shift/edit-shift.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShiftsService } from './services/shifts.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyShiftsComponent,
    AddShiftComponent,
    EditShiftComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ShiftsService,
  ],
})
export class AppModule {}
