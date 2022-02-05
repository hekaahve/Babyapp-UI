import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeightsService {
  public Ninni: any[] = [];
  public Pos2SD: any[] = [];

  constructor() { }

  //Returns weightinfo of Ninni
  getNinni(){
    return this.Ninni= [
        {"Age":"0","Weight":3.950, "Name":"Ninni"},
        {"Age":"0.1", "Weight":4.76, "Name":"Ninni"},
        {"Age":"0.2", "Weight":5.285, "Name":"Ninni"}]
  }

  getPos2SD(){
    return this.Pos2SD=[
      {"Age":"0","Weight":4.5, "Name":"2SD"},
      {"Age":"0.1", "Weight":5.6, "Name":"2SD"},
      {"Age":"0.2", "Weight":7, "Name":"2SD"},
      {"Age":"0.3", "Weight":8, "Name":"2SD"},
      {"Age":"0.4", "Weight":8.9, "Name":"2SD"},
      {"Age":"0.5", "Weight":9.5, "Name":"2SD"}
    ]
  }
}
