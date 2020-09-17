import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { SelectorMatcher } from '@angular/compiler';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  typeList: {'satType': string, 'satTypeCount': number}[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    this.typeList = [];
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          let newTypeListObject = {};
          let typeCounter = 0;
          // TODO: loop over satellites
          for(let i=0; i<fetchedSatellites.length; i ++){
            // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            let newSatellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            this.sourceList.push(newSatellite);

          }
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          this.displayList = this.sourceList.slice(0);
          for(let sat of this.displayList){
            if(!this.typeList.some(check => check.satType === sat.type)){
              typeCounter=0;
              for(let j=0; j<this.displayList.length; j++){
                sat.type===this.displayList[j].type ? typeCounter++ : false;
              }
              newTypeListObject={'satType':sat.type, 'satTypeCount': typeCounter}
              this.typeList.push(newTypeListObject)
            }
          }


       }.bind(this));
    }.bind(this));

  }
    search(searchTerm: string): void{
      let newTypeListObject = {};
      let typeCounter = 0;
      let matchingSatellites: Satellite[] = [];
      searchTerm = searchTerm.toLowerCase();
      for(let i=0; i<this.sourceList.length; i ++){
        let name=this.sourceList[i].name.toLowerCase();
        let type=this.sourceList[i].type.toLowerCase();
        let orbitType=this.sourceList[i].orbitType.toLowerCase();
        if(name.indexOf(searchTerm)>=0 || type.indexOf(searchTerm)>=0 || orbitType.indexOf(searchTerm)>=0){
          matchingSatellites.push(this.sourceList[i]);
        }
      }
      this.displayList = matchingSatellites;
      for(let sat of matchingSatellites){
        if(!this.typeList.some(check => check.satType === sat.type)){
          typeCounter = 0;
          for(let j=0; j<matchingSatellites.length; j++){
            sat.type===matchingSatellites[j].type ? typeCounter++ : false;
          }
          newTypeListObject={'satType':sat.type, 'satTypeCount': typeCounter}
          this.typeList.push(newTypeListObject)
        }
      }
    }
}
