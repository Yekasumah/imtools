import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { EnterbvnComponent } from './enterbvn/enterbvn.component';
import { ForgetpwordComponent } from './forgetpword/forgetpword.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './register/signup/signup.component';
import { ResetpwordComponent } from './resetpword/resetpword.component';
import { SetupaccountComponent } from './setupaccount/setupaccount.component';
import { SigninComponent } from './signin/signin.component';
import { VerifypwordComponent } from './verifypword/verifypword.component';
import { AddfundsComponent } from './addfunds/addfunds.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { VerifybvnComponent } from './verifybvn/verifybvn.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'verifybvn', component: VerifybvnComponent},
  {path:  'signin', component: SigninComponent},
  {path: 'verifypword', component: VerifypwordComponent},
  {path: 'forgetpword', component: ForgetpwordComponent },
  {path: 'setupaccount', component: SetupaccountComponent},
  {path: 'enterbvn', component: EnterbvnComponent},
  {path: 'email', component: EmailComponent},
  {path: 'resetpword', component: ResetpwordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addfunds', component: AddfundsComponent},
  {path: 'withdraw', component: WithdrawComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
