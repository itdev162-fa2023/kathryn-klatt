import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
model: any = {}

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createPost(){
    this.model.date = new Date();
    this.http.post('http://localhost:5010/api/posts', this.model).subscribe(
      response => {this.home()},
      error=> {console.log(error)}
    );
  }

  cancel(){
    this.home();
  }

  home(){
    this.route.navigate(["/"]);
  }
}
