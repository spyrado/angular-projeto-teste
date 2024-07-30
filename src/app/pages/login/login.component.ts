import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup = this.fb.group({
    username: [undefined],
    password: [undefined]
  });

  constructor(
    private route: Router,
    private fb: FormBuilder
  ) {}


  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log(e);
    this.redirectToHome();
  }

  private redirectToHome() {
    this.route.navigate(['']);
  }
}
