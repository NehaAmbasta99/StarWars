import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users:any[];
  selectedUser:any[];
  visible :boolean;
  constructor(private peopleService: PeopleService){

  }
  ngOnInit(){
    this.getPeopleOfStarWars();
  }

  //Get all the people of star wars
  getPeopleOfStarWars():void{
    this.peopleService.getPeopleOfStarWars()
                     .subscribe(
                         results =>{
                             this.users = results["results"];
                             console.log(this.users);
                         }
                     )
 }

 //Get the people by id
 getPeopleDetail(url):void{
        this.peopleService.getPeopleDetail(url)
        .subscribe(
           results =>{
               this.selectedUser = results;
               this.visible = !this.visible;
           }
       )      
 }
}
