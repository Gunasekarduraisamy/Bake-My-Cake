import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false;

  login(adminCode: string) {
      this.isLoggedIn = adminCode === "guna";
  }

  logout() {
      this.isLoggedIn = false;
  }
}
