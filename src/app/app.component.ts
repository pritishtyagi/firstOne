import { Component } from '@angular/core';

export type FormType = 'login' | 'signup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormType = 'signup';

  get showLoginForm() {
    return this.form === 'login';
  }

  get showSignupForm() {
    return this.form === 'signup';
  }

  toggleForm(type:FormType) {
    this.form = type;
  }
}