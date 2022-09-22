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
  getAll(): Observable<Chart[]> {
  //https://blooming-castle-98347.herokuapp.com/api/charts/ninni
  return this.http.get<Chart[]>('http://localhost:3001/api/charts', {observe: 'body', responseType: 'json'})
  }

  //TODO: Finish, check if works
  addValue(age: any, weight: any, name: any): Observable<any>{
    return this.http.post('http://localhost:3001/api/charts', {age: age, weight: weight, name: name})
  }
}
