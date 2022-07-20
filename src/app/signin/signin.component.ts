import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   login:any= FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.login= this.fb.group({
      email:['',Validators.required],
      password:['',Validators.compose([Validators.required])]

    })
  }
loginSubmit(data:any){
       console.log(data);
}
}
