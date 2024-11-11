import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './main/admin/admin.component';
import { MemberComponent } from './main/member/member.component';
import { UserComponent } from './main/user/user.component';
import { RegisterComponent } from './page/register/register.component';
import { BoothComponent } from './main/booth/booth.component';
import { AuthGuard } from './guards/auth.guard';
import { BoothmemberComponent } from './main/boothmember/boothmember.component';
import { ReserveComponent } from './main/reserve/reserve.component';
import { BoothadminComponent } from './main/boothadmin/boothadmin.component';
import { EditBoothComponent } from './dialog/edit-booth/edit-booth.component';
import { AddProjectComponent } from './dialog/add-project/add-project.component';
import { CheckboothComponent } from './maincheck/checkbooth/checkbooth.component';
import { PriceboothComponent } from './mainprice/pricebooth/pricebooth.component';
import { EditMemberComponent } from './page/editmember/editmember.component';
import { SumbitboothComponent } from './maincheck/sumbitbooth/sumbitbooth.component';
import { ListmemberComponent } from './maincheck/listmember/listmember.component';
import { ListpriceComponent } from './maincheck/listprice/listprice.component'; 
import { AddevenComponent } from './main/addeven/addeven.component';
import { EditevenComponent } from './main/editeven/editeven.component';

const routes: Routes = [
  { path: '', redirectTo: '/main/user', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main/admin', component: AdminComponent },
  { path: 'main/member', component: MemberComponent, canActivate: [AuthGuard] },
  { path: 'main/user', component: UserComponent },
  { path: 'page/register', component: RegisterComponent },
  { path: 'main/booth/:projectId', component: BoothComponent },
  { path: 'main/boothmember/:projectId', component: BoothmemberComponent },
  { path: 'main/reserve', component: ReserveComponent },
  { path: 'main/boothadmin/:projectId', component: BoothadminComponent },
  { path: 'main/edit-booth/:projectId', component: EditBoothComponent },
  { path: 'maincheck/checkbooth', component: CheckboothComponent },
  { path: 'mainprice/pricebooth',component: PriceboothComponent },
  { path: 'page/editmember',component: EditMemberComponent},
  { path: 'maincheck/sumbitbooth',component: SumbitboothComponent },
  { path: 'maincheck/listmember',component: ListmemberComponent },
  { path: 'maincheck/listprice',component: ListpriceComponent },
  { path: 'main/addeven',component: AddevenComponent },
  { path: 'main/editeven', component: EditevenComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
