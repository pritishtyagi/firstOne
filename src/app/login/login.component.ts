import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { FormType } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private fb: FormBuilder){ }

  @Input() public form:FormType = "signup" 
  
  @Output() formToggle = new EventEmitter();

  loginForm = this.fb.group({
    userName:[
      '',
      Validators.required
    ],

    userEmail:[
      '',
      [Validators.email,Validators.required]
    ],

    userPassword:[
      '',
      [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"),Validators.required]
    ]
  })

  ngOnInit(): void {}

  get userNameControl(){
    return this.loginForm.get("userName")
  }

  get userEmailControl(){
    return this.loginForm.get('userEmail')
  }

  get userPasswordControl(){
    return this.loginForm.get('userPassword')
  }

  logValues(): void {
    console.log(this.loginForm.value);
  }

  onSubmit():void{}

  toggleForm(){
    this.formToggle.emit(this.form)
  }

}
