import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResolveStart, Router } from '@angular/router'
import { MessageComponent } from '../message/message.component';
import * as bcrypt from 'bcryptjs';
import { AuthService } from '../auth-service';
import { UserLoggedInComponent } from '../info-snackbars/user-logged-in/user-logged-in.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private _ourHttpClient:HttpClient, private _snackBar: MatSnackBar, private router: Router, private _auth: AuthService) { }
  customer: any;
  name:string;
  password: string;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public getUserOld(user:any):any {

      return this._ourHttpClient.get("http://localhost:8080/getUser?name=" + user.name).subscribe(
        (response)=>{

          const salt = bcrypt.genSaltSync(10);
  
          if( bcrypt.compareSync(user.password,response['password'], function(err, res) {
            if (err){

              this._auth.getUserDetails(user.name, user.password);
              return false;
            }
            if (res) {

              localStorage.setItem("loggedIn",user.name);
              this._auth.setLoggedIn(true, user.name);
              return true;
            }

            return false;
          }) == true){
            this._auth.setLoggedIn(true, user.name);
            
            this.router.navigateByUrl('/');
          } else {
            this.router.navigateByUrl('/signin');
            this.openSnackBar();
          };
        },
        (error)=>{
          console.error(error);
        })
  }

  public getUser(user:any):any {

      return this._ourHttpClient.get("http://localhost:8080/login?name=" + user.name).subscribe(
        (response)=>{

          const salt = bcrypt.genSaltSync(10);
  
          if( bcrypt.compareSync(user.password,response['password'], function(err, res) {
            if (err){

              this._auth.getUserDetails(user.name, user.password);
              return false;
            }
            if (res) {

              localStorage.setItem("loggedIn",user.name);
              this._auth.setLoggedIn(true, user.name);
              
              return true;
            }

            return false;
          }) == true){
            this._auth.setLoggedIn(true, user.name);

            this._auth.setRole(true, response['priviledges']);

            this.router.navigateByUrl('/');
          } else {
            this.router.navigateByUrl('/signin');
            this.openSnackBar();
          };
        },
        (error)=>{
          console.error(error);
        })
  }


  public setPriviledges(name:string): void {
    var dictionary = {}
    dictionary['name'] = name

    this._ourHttpClient.post("http://localhost:8080/priviledges", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{


        localStorage.setItem('priviledge',response['priviledge']);
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: 10 * 1000,
    });
  }

  userLoggedInInfo() {
    this._snackBar.openFromComponent(UserLoggedInComponent, {
      duration: 10 * 1000,
    });
  }

  public logError(error){
    console.error("Occured error: "+error);
      return Observable.throw(error || "Internal server error - undefined error!");
  }

  submit() {
    if (this.form.status != "INVALID") {
      this.userLoggedInInfo();
      this.submitEM.emit(this.form.value);
    }
    else {
      let snackBarRef = this._snackBar.open('Please fill up all required fields', '', {
        duration: 1000
      });
    }
  }

  @Output() submitEM = new EventEmitter();
}
