import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { FormType } from '../app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  @Input() public form:FormType = "login" 
  
  @Output() formToggle = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  signUpForm = this.fb.group({
    userName : ["",Validators.required],
    userEmail:[
      '',
      [Validators.email,Validators.required]    
    ],
    userPassword:[
      '',
      [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"),Validators.required]
    ]
  })

  ngOnInit(): void {
    
  }

  get userEmailControl(){
    return this.signUpForm.get('userEmail');
  }

  get userPasswordControl(){
    return this.signUpForm.get('userPassword');
  }

  get confirmPasswordControl(){
    return this.signUpForm.get('confirmPassword');
  }

  logValues(): void {
    console.log(this.signUpForm.value);
  }

  onSubmit():void{}

  toggleForm(){
    this.formToggle.emit(this.form)
  }

}