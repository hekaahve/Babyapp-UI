import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Chart {
  age: Number;
  weight: Number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeightsService {
  public Ninni: any;
  public Pos2SD: any[] = [];

  constructor(public http: HttpClient) {}

  getAll(): Observable<Chart[]> {
    //https://blooming-castle-98347.herokuapp.com/api/charts/ninni
    return this.http.get<Chart[]>('http://localhost:3001/api/charts', {
      observe: 'body',
      responseType: 'json',
    });
  }

  addValue(age: any, weight: any, name: any): Observable<any> {
    var newChart = JSON.stringify({ age: age, weight: weight, name: name });
    const headers = { 'content-type': 'application/json' };
    return this.http.post('http://localhost:3001/api/charts', newChart, {
      headers: headers,
    });
  }
}
