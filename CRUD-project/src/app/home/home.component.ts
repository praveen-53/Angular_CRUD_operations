import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products = [];

  fetchData = function() {
    this.http.get('http://localhost:3000/products').subscribe(
      (res) => {
        this.products = res;
      }
    );
  }

  deleteProduct = function(id)  {
    if(confirm("Are you sure")) {
      const url = `${"http://localhost:3000/products"}/${id}`;
      this.http.delete(url).toPromise()
        .then(() => {
          this.fetchData();
        })
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
