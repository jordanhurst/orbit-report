import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbits-count',
  templateUrl: './orbits-count.component.html',
  styleUrls: ['./orbits-count.component.css']
})
export class OrbitsCountComponent implements OnInit {

  @Input() satellites: Satellite[];
  @Input() typeList: {'satType': string, 'satTypeCount': number}

  constructor() { }

  ngOnInit() {
  }

  typeCount(typeToCount: string): number{
    let satelliteTypeCount: number = 0;
    typeToCount = typeToCount.toLowerCase();
    for(let i=0; i<this.satellites.length; i++){
      let currentType = this.satellites[i].type.toLowerCase();
      if(currentType.indexOf(typeToCount)>=0){
        satelliteTypeCount ++;
      }
    }
    return satelliteTypeCount;
  }

}
