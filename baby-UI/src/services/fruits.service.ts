import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
 public fruits: string[] = [];
 constructor(){}

 getFruits(){
  this.fruits = ['Apple', 'Orange', 'Banana'];
  return this.fruits;
 }
}
