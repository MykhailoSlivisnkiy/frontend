import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  authAction() {

    if (this.authService.isUserLoggedIn) {
      this.authService.logout();
      this.route.navigate(['login']);
    } else {
      this.route.navigate(['login']);
    }
  }
}
