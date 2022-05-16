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
  public asyncResult: any;

  constructor(public http: HttpClient) { }

  private async request(method: string, url: string, data?: any, responseType?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
    });    
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

getValue(): Observable<Chart[]> {
  return this.http.get<Chart[]>('http://localhost:3001/api/charts/ninni', {observe: 'body', responseType: 'json'})
}

  //Returns weightinfo of Ninni. TODO: Connect to backend, fix response
 getNinni(){
  let value;
  //console.log(this.getValue())
  this.Ninni = [{id: 1,"age":"0","weight":2.5, "name":"ninni"},
  {id: 2,"age":"1", "weight":8.6, "name":"ninni"}]
  console.log("toinen ", this.Ninni[1])
  //return this.http.get('http://localhost:3001/api/charts/ninni')
  return this.Ninni
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
