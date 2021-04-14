import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  isAddProductVisible:boolean = false;
  isCartVisible: boolean = true;
  isNavButtonVisible: boolean = true;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.router.url == "/admin"){
      this.isAddProductVisible = true;
    }
    if (this.router.url == '/login' || this.router.url == '/signup') {
      this.isNavButtonVisible = false;
      this.isCartVisible = false;
    }
    if (this.router.url == '/cart') {
      this.isCartVisible = false;
    }
  }
  logout(): void {
    console.log('Logout');
    localStorage.removeItem('token');
    this.goToLogin();
  }
  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
