import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { UserCreatedComponent } from '../info-snackbars/user-created/user-created.component';
import { LoggingErrorsService } from '../services/logging-errors.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  errorMessage = "invalid "
  form: FormGroup
  errorb
  constructor(private _ourHttpClient:HttpClient, private _snackBar: MatSnackBar, 
    private router: Router, private _loggingErrorsService: LoggingErrorsService) { }

  name:string;
  password: string;
  email: string;
  address: string;

  ngOnInit(): void {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });


  }

  public setUserOld(user:any):any {

    const salt = bcrypt.genSaltSync(10);
    const passBCrypt1 = bcrypt.hashSync(user.password, salt);
    var newUser = {}
    newUser['name'] = user.name;
    newUser['password'] = passBCrypt1;
    //users/register/name/{username}/password/{password}
    return this._ourHttpClient.post("http://localhost:8080/register", newUser ).subscribe(
      (response) => {
        

        if( response!= null){
          this.router.navigateByUrl('/signin');
          this.userCreatedInfo();
        } else {
          this.router.navigateByUrl('/signup');
        }
      },
      (error)=>{
        console.error(error);
        this._loggingErrorsService.captureError(error);
      })
  }

  public setUser(user:any):any {

    const salt = bcrypt.genSaltSync(10);
    const passBCrypt1 = bcrypt.hashSync(user.password, salt);
    var newUser = {}
    newUser['name'] = user.name;
    newUser['email'] = user.email;
    newUser['password'] = passBCrypt1;

    //users/register/name/{username}/password/{password}
    return this._ourHttpClient.post("http://localhost:8080/signup", newUser, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{


        if( response!= null){
          this.router.navigateByUrl('/signin');
          this.userCreatedInfo();
        } else {
          this.router.navigateByUrl('/signup');
        }
      },
      (error)=>{
        console.error(error);
        this._loggingErrorsService.captureError(error);
      })
  }

  userCreatedInfo() {
    this._snackBar.openFromComponent(UserCreatedComponent, {
      duration: 10 * 1000,
    });
  }

  submit() {

    if (this.form.status != "INVALID") {
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
