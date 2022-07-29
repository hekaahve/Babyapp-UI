import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

export interface Chart {
  age: string,
  weight: Number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class WeightsService {
  public Ninni: any;
  public Pos2SD: any[] = [];

  constructor(public http: HttpClient) { }

  //TODO getAll, then infocomponent filters by name
getNinni(): Observable<Chart[]> {
  return this.http.get<Chart[]>('https://blooming-castle-98347.herokuapp.com/api/charts/ninni', {observe: 'body', responseType: 'json'})
}

  getPos2SD(){
    return this.Pos2SD=[
      {"age":"0","weight":4.5, "name":"2SD"},
      {"age":"1", "weight":5.6, "name":"2SD"},
      {"age":"2", "weight":7, "name":"2SD"},
      {"age":"3", "weight":8, "name":"2SD"},
      {"age":"4", "weight":8.9, "name":"2SD"},
      {"age":"5", "weight":9.5, "name":"2SD"}
    ]
  }
}
