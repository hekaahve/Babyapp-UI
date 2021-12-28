import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
 constructor(){}

 getFruits(){
  let fruits:string[];
  fruits = ['Apple', 'Orange', 'Banana'];
  return fruits;
 }
}
