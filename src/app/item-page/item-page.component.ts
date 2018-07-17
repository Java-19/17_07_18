import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit{
  id:number;
  title:string;
  desc:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];
    this.desc = this.route.snapshot.queryParams['desc'];

    this.route.params.subscribe(
      (params:Params)=>{
        this.id = params['id'];
        this.title = params['title'];
      }
    );

    this.route.queryParams.subscribe(
      (params:Params) => {
        this.desc = params['desc'];
      }
    );
  }

}
