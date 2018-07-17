import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }


  openList() {
    this.router.navigate(['list'],{relativeTo:this.route});
  }
}
