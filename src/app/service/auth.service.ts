import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ConstantService} from "./constant-service";
import {LoginResponse} from "../models/login-response";
import {AuthUser} from "../models/authUser";
import {SignUpUser} from "../models/sign-up-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public showError: boolean = false;

  constructor(private http: HttpClient, private router: Router, private constants: ConstantService) {
  }

  get isUserLoggedIn(): boolean {
    return (localStorage.getItem('accessToken') !== null);
  }

  get accessToken(): string {
    let token = localStorage.getItem("accessToken");

    if(token === null) {
      return "";
    } else {
      return token;
    }
  }

  get refreshToken(): string {
    let token = localStorage.getItem("refreshToken");

    if(token === null) {
      return "";
    } else {
      return token;
    }
  }

  ngOnInit(): void {
  }

  logout() {
    console.log('remove');
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.router.navigateByUrl('/login');
  }

  //login(authUser: AuthUser) {
  login(authUser: AuthUser) {
    return this.http.post<LoginResponse>(this.constants.authServiceURL + '/login', authUser).subscribe((response) => {

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      this.showError = false;
      this.router.navigateByUrl('shop').then(r => {});
      //TODO: handle error
    }, catchError => {
      this.showError = true;
    });
  }

  register(user: SignUpUser) {
    return  this.http.post<LoginResponse>(this.constants.authServiceURL + '/register', user).subscribe((response) => {
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      this.showError = false;
      this.router.navigateByUrl('shop').then(r => {});
      //TODO: handle error
    }, catchError => {
      this.showError = true;
    });
  }
}
