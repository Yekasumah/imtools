import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 signupForm= new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)])
 })
 onSubmit(){
  console.log(this.signupForm.value)
  
 }

  get email(){
    return this.signupForm.get('email')
  }
  get password(){
    return this.signupForm.get('password')
  }
}



//document.getElementById ("submit")?.addEventListener("click", verifyPword);

//function verifyPword(){
  //window.location.href= "src\app\verifypword\verifypword.component.html";}

