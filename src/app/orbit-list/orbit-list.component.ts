import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  sort(sortingMethod: string): void{
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
      if(a[sortingMethod] < b[sortingMethod]) {
         return -1;
      } else if (a[sortingMethod] > b[sortingMethod]) {
         return 1;
      }
      return 0;
   });
  }

}
