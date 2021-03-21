import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  name: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', role: "assistant"},
  {id: 2, name: 'Helium', role: "user"},
  {id: 3, name: 'Carboneum', role: "admin"},
  {id: 4, name: 'Kalium', role: "user"}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'role', 'change-role'];
  dataSource = ELEMENT_DATA;
  phrase: string;
  lastPhrase: string;
  last: string;
  elements: any;
  option: string;
  optionRole: string;


  constructor(private _ourHttpClient: HttpClient) { }

  ngOnInit(): void {
    //this.test();
    this.searchAccordingEmail("ja");
  }

  private test(){
    this.getRole('des');
  }

  public changeRole(role:string, name:string, previousRole:string):void {
    if(previousRole != role){
      this.setRole(role, name);
    } 
  }

  public setRole(role:string, name:string):void {
    var dictionary = {}
    dictionary['name'] = name;
    dictionary['role'] = role;
    dictionary['password'] = "";

    this._ourHttpClient.post("http://localhost:8080/setRole", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{

        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }

  public getRole(name:string):void {
    var dictionary = {}
    dictionary['name'] = name;
    dictionary['password'] = "";

    this._ourHttpClient.post("http://localhost:8080/getRole", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{

        return response;
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

        this.elements = JSON.parse(response.toString());
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

        this.elements = JSON.parse(response.toString());
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }
}
