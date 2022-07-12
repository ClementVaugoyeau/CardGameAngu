
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { generate } from 'rxjs';




@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})





export class CardsComponent implements OnInit {

  

  cards =  [ 
  "Mort de Louis XIV", "chute de rome", 'invention imprimerie']

  cards2: any = [];

  cards3: any = [];

  cardsHand = [""]

 
  

    ngOnInit(): void {

      
      
    }

  

  drop(event: CdkDragDrop<any[]>) {
    
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

  generateCards() {
    var drawCards: any = [];
   
  fetch('../../assets/cardLibrary.json').then(res => res.json())
  .then(jsonData => {
    
    
    var arr = [];
    var allCardArray = Object.values(jsonData)
    var allCards: any = allCardArray[0]
   
    

    while (arr.length < 6) {
        var r = Math.floor(Math.random() * 14) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

   arr.forEach(element => {
    
    drawCards.push(allCards[element])
    console.log(element);
      
    });

    
    console.log(drawCards)
    
   
  
  });
    
  this.cards2 = drawCards;
 }

}
