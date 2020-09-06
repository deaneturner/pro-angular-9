import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.clear();
    this.router.navigateByUrl('/store');
  }

}
