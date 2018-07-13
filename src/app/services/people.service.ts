import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class PeopleService{
    protected url:string = 'https://swapi.co/api/people/';

    constructor(private http:HttpClient){

    }

getPeopleOfStarWars(){
    return this.http
           .get<any[]>(this.url)
           .pipe(map(data=> data));
}

getPeopleDetail(url){
    return this.http
            .get<any[]>(url)
            .pipe(map(data=> data)); 
}

}
