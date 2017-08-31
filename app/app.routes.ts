import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import {NotFountComponent} from './notfount.component';
import {EmployeeDetailsComponent} from './employee-detail.component';
const routing: Routes = [
    // tu dong chuyen trang nay sang trang khac khi khong co redirecTo: 
    { path: '', component:HomeComponent},
    { path: 'employees', component: EmployeeListComponent },
    { path:'employees-detail/:id', component: EmployeeDetailsComponent},
    { path: '**', component: NotFountComponent }
]
export const appRoutes  = RouterModule.forRoot(routing);