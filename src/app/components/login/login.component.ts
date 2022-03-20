import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {AuthUser} from "../../models/authUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  signupForm: FormGroup | any;
  failSignUp: boolean = true;
  showError: boolean = false;

  hide = true;
  showForm: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    //this.service.showSearchInput = false;

    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.signupForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get signUpName() {
    return this.signupForm.get('name');
  }

  get signUpLogin() {
    return this.signupForm.get('login');
  }

  get signUpPassword() {
    return this.signupForm.get('password');
  }

  getObjUser(name: any, login: any, password: any, roleId: string = '2') {
    return {
      name, login, password, roleId
    }
  }

  onSubmitSignup() {
    let user = this.getObjUser(
      this.signupForm.get('name').value,
      this.signupForm.get('login').value,
      this.signupForm.get('password').value
    );
   // this.service.addUser(user);

    setTimeout(() => {
      if (false) {
        //this.dialog.open(DialogOnCreateOrderComponent, {width: '450px'});
        setTimeout(() => {
          this.showForm = false;
          this.dialog.closeAll();
        }, 2000)
      }
    }, 1000);

  }

  onSubmit() {
    //this.authService.login(new AuthUser(this.loginForm.get('login').value, this.loginForm.get('password').value));
    let authUser = new AuthUser(this.loginForm.get('login').value, this.loginForm.get('password').value);

    this.authService.login(authUser);

    this.showError = this.authService.showError;
  }


}
