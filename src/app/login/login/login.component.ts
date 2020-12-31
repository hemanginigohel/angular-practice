import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private loginService: LoginService,
    private router: Router) {
    this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginService.UserLogin(this.loginForm.value)) {
      localStorage.setItem('current_user', 'active');
      this.router.navigate(['/product']);
    }
    else {
      alert("wrong credentials");
    }
  }
}
