import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
 fruits: string[] = [];
 constructor(){}

 getFruits(){
  this.fruits = ['Apple', 'Orange', 'Banana'];
  return this.fruits;
 }
}
