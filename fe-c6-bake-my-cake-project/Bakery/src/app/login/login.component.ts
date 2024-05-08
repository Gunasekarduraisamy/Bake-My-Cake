import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminCode!: string;
  
  constructor(private authservice:AuthService ,private routeService:RouteService) {}

  ngOnInit(): void {
    
  }
  validateAdminCode() {
    this.authservice.login(this.adminCode);
    if(this.authservice.isLoggedIn) {
      this.routeService.navigateToBakeRequestsView();
    }
  }
}
