import { StorageService } from './../StorageService';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { UserLoggedOutComponent } from '../info-snackbars/user-logged-out/user-logged-out.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  numberOfProductsInCart;
  constructor(private _auth: AuthService, private _localStorage: StorageService, private _snackBar:MatSnackBar) {

  }
  ngOnInit(): void {
  }

  public isLogged(): boolean {
    return localStorage.getItem("loggedIn") !== null;
  }

  public isShopAssistant(): boolean {
    var role = localStorage.getItem("role");
    return role !== null && (role == "assistant" || role == "admin" );
  }

  public isAdmin(): boolean {
    var role = localStorage.getItem("role");
    return role !== null && role == "admin";
  }

  public logout(): void {
    this.successfulLoggedOutInfo();
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
  }

  public toManageBoard(): void { 
  }

  public toAdminBoard(): void {
  }

  successfulLoggedOutInfo() {
    this._snackBar.openFromComponent(UserLoggedOutComponent, {
      duration: 10 * 1000,
    });
  }
}
