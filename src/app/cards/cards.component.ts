
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})





export class CardsComponent implements OnInit {

  

  cards =  [ 
  "Mort de Louis XIV", "chute de rome", 'invention imprimerie']

  cardsHand = [
    ''
    
  ]

  cardsArray: any;
  

    ngOnInit(): void {
      
    }

  

  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      
    transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

 public generateCards() {
   
  fetch('../../assets/cardLibrary.json').then(res => res.json())
  .then(jsonData => {
    this.cardsArray = jsonData;
    console.log(this.cardsArray)});
    

 }

}
