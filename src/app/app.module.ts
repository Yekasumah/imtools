import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './register/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifypwordComponent } from './verifypword/verifypword.component';
import { ForgetpwordComponent } from './forgetpword/forgetpword.component';
import { SetupaccountComponent } from './setupaccount/setupaccount.component';
import { EnterbvnComponent } from './enterbvn/enterbvn.component';
import { ResetpwordComponent } from './resetpword/resetpword.component';
import { EmailComponent } from './email/email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddfundsComponent } from './addfunds/addfunds.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    DashboardComponent,
    VerifypwordComponent,
    ForgetpwordComponent,
    SetupaccountComponent,
    EnterbvnComponent,
    ResetpwordComponent,
    EmailComponent,
    AddfundsComponent,
    WithdrawComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
