import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  items = [{
    title:'Item1',
    id:1,
    desc:'item1desc'
  },
    {
      title:'Item2',
      id:2,
      desc:'item2desc'
    },
    {
      title:'Item3',
      id:3,
      desc:'item3desc'
    }]
}
