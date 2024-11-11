import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './main/admin/admin.component';
import { MemberComponent } from './main/member/member.component';
import { UserComponent } from './main/user/user.component';
import { RegisterComponent } from './page/register/register.component';
import { BoothComponent } from './main/booth/booth.component';
import { BoothmemberComponent } from './main/boothmember/boothmember.component';
import { ReserveComponent } from './main/reserve/reserve.component';
import { BoothadminComponent } from './main/boothadmin/boothadmin.component';
import { EditProjectComponent } from './dialog/edit-project/edit-project.component';
import { EditBoothComponent } from './dialog/edit-booth/edit-booth.component';
import { AddBoothComponent } from './dialog/add-booth/add-booth.component';
import { AddProjectComponent } from './dialog/add-project/add-project.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { CheckboothComponent } from './maincheck/checkbooth/checkbooth.component';
import { PriceboothComponent } from './mainprice/pricebooth/pricebooth.component';
import { EditMemberComponent } from './page/editmember/editmember.component';
import { UploadslipComponent } from './maincheck/uploadslip/uploadslip.component';
import { SumbitboothComponent } from './maincheck/sumbitbooth/sumbitbooth.component';
import { ListmemberComponent } from './maincheck/listmember/listmember.component';
import { ListpriceComponent } from './maincheck/listprice/listprice.component';
import { AddevenComponent } from './main/addeven/addeven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditevenComponent } from './main/editeven/editeven.component';
import { EditEventComponent } from './dialog/edit-event/edit-event.component'; 

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    AdminComponent,
    MemberComponent,
    UserComponent,
    RegisterComponent,
    BoothComponent,
    BoothmemberComponent,
    ReserveComponent,
    BoothadminComponent,
    EditProjectComponent,
    EditBoothComponent,
    AddBoothComponent,
    AddProjectComponent,
    ConfirmDialogComponent,
    CheckboothComponent,
    PriceboothComponent,
    EditMemberComponent,
    UploadslipComponent,
    SumbitboothComponent,
    ListmemberComponent,
    ListpriceComponent,
    AddevenComponent,
    EditevenComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
