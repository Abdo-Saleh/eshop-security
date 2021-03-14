import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css']
})
export class OrderCompletedComponent implements OnInit {

  constructor() { }

  products:any;

  ngOnInit(): void {
    this.products = this.getBoughtProducts();
  }

  getBoughtProducts():any{
    var string = localStorage.getItem("boughtProducts");
    var boughtProducts;
    if(string != null){
      return boughtProducts = JSON.parse(string);
    }
    return []
  }
}
