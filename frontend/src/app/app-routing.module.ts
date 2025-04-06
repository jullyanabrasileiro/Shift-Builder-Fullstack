import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddShiftComponent } from './components/add-shift/add-shift.component';
import { EditShiftComponent } from './components/edit-shift/edit-shift.component';
import { MyShiftsComponent } from './components/my-shifts/my-shifts.component';

import { AllShiftsComponent } from './components/admin/all-shifts/all-shifts.component';
import { AllWorkersComponent } from './components/admin/all-workers/all-workers.component';
import { WorkerProfileComponent } from './components/admin/worker-profile/worker-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'home', component: HomeComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'profile', component: ProfileComponent },
  { path: 'add-shift', component: AddShiftComponent },  
  { path: 'edit-shift/:id', component: EditShiftComponent },  
  { path: 'my-shifts', component: MyShiftsComponent },  

  // Admin routes
  { path: 'admin/all-shifts', component: AllShiftsComponent },  
  { path: 'admin/all-workers', component: AllWorkersComponent }, 
  { path: 'admin/worker-profile/:id', component: WorkerProfileComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})
export class AppRoutingModule {}
