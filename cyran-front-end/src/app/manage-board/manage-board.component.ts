import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCreatedComponent } from '../info-snackbars/product-created/product-created.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', email: "e@e.com"},
  {id: 2, name: 'Helium', email: "kkklll@kkklll.com"},
];

@Component({
  selector: 'app-manage-board',
  templateUrl: './manage-board.component.html',
  styleUrls: ['./manage-board.component.css']
})
export class ManageBoardComponent implements OnInit {

  form: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'email', 'change-username', 'change-email'];
  dataSource = ELEMENT_DATA;
  name:string;
  description:string;
  price:number;
  url:string;
  quantity:number;

  phrase: string;
  lastPhrase: string;
  last: string;
  option: string;
  elements: any;

  i:number;
  newName: string;
  newEmail: string;

  constructor(private _ourHttpClient: HttpClient, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.searchAccordingEmail("ja");

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  test(){
    this.searchAccordingName("a");
    this.searchAccordingEmail("a");
  }

  productCreatedInfo() {
    this._snackBar.openFromComponent(ProductCreatedComponent, {
      duration: 10 * 1000,
    });
  }

  public insert(name:string, description:string, price:number, url:string, quantity:number): void {
    var dictionary = {}
    dictionary['name'] = name;
    dictionary['description'] = description;
    dictionary['price'] = price;
    dictionary['URL'] = url;
    dictionary['quantity'] = quantity;

    this._ourHttpClient.post("http://localhost:8080/create/product", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }

  public search(phrase:string, option:string){

    if(option == "name"){
      this.searchAccordingName(phrase);
    } else if(option == "email"){
      this.searchAccordingEmail(phrase);
    } else {
      console.log("Unknown option to search!");
    }
  }

  public doLastSearch(){
    if(this.last=="email"){
      this.searchAccordingEmail(this.lastPhrase);
    } else {
      this.searchAccordingName(this.lastPhrase);
    }
  }

  public searchAccordingName(name:string): void {
    var dictionary = {}
    dictionary['name'] = name;
    this.last = "name";
    this.lastPhrase = name;

    this._ourHttpClient.post("http://localhost:8080/name", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        this.elements = JSON.parse(response.toString());
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }

  public changeEmail(oldEmail:string, id:number): void {
      var dictionary = {}
      var newEmail = (document.getElementById("email-" + id.toString())as HTMLInputElement).value;
      dictionary['oldEmail'] = oldEmail;
      dictionary['newEmail'] = newEmail;
      
      this._ourHttpClient.post("http://localhost:8080/changeEmail", dictionary, { responseType: 'text' as 'json' }).subscribe(
        (response)=>{
          console.log(response);
          this.elements = JSON.parse(response.toString());
          this.doLastSearch();
          return dictionary;
        },
        (error)=>{
          console.error(error);
          return dictionary;
        });

    }

  public changeName(oldName:string, id:number): void {
      var dictionary = {}
      var newName = (document.getElementById("name-" + id.toString()) as HTMLInputElement).value;
      dictionary['oldName'] = oldName;
      dictionary['newName'] = newName;

      this._ourHttpClient.post("http://localhost:8080/changeName", dictionary, { responseType: 'text' as 'json' }).subscribe(
        (response)=>{
          console.log(response);
          this.elements = JSON.parse(response.toString());
          this.doLastSearch();
          return dictionary;
        },
        (error)=>{
          console.error(error);
          return dictionary;
        });

    }

  public searchAccordingEmail(email:string): void {
    var dictionary = {}
    dictionary['email'] = email;
    this.last = email;
    this.lastPhrase = email;

    this._ourHttpClient.post("http://localhost:8080/email", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        this.elements = JSON.parse(response.toString());
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }
  submit() {
    if (this.form.status != "INVALID") {
      this.insert(this.name, this.description, this.price, 'none', this.quantity);
      this.productCreatedInfo();
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
