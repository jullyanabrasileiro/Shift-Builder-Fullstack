import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { EditShiftComponent } from './components/edit-shift/edit-shift.component';
import { AddShiftComponent } from './components/add-shift/add-shift.component';
import { AllShiftsComponent } from './components/admin/all-shifts/all-shifts.component';
import { WorkerProfileComponent } from './components/admin/worker-profile/worker-profile.component';
import { MyShiftsComponent } from './components/my-shifts/my-shifts.component'; // ✅ Add this


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent, 
    EditShiftComponent,
    AddShiftComponent,
    AllShiftsComponent,
    WorkerProfileComponent,
    MyShiftsComponent,
  ],
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [provideAnimationsAsync(),provideHttpClient(),provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}