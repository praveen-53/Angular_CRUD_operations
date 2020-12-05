import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http : HttpClient) { }

  productObject:object = {};
  conformationString:string = "New Product has been added.";
  isAdded:boolean = false;

  addNewProduct = function(product) {
      this.productObject = {
        "name" : product.value.name,
        "color" : product.value.color
      }
      this.http.post("http://localhost:3000/products", this.productObject).subscribe(res => console.log(res));
      this.isAdded = true;
  }

  ngOnInit() {
  }

}
