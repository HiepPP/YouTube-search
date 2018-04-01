import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;
  post: number = 0;
  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.post++;
    this.loading = true;
    this.http.request(`http://jsonplaceholder.typicode.com/posts/${this.post}`).subscribe(
      (res: Response) => {
        this.data = res.json();
        this.loading = false;
      }
    )
  }
}
