
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards = [
    'Mort de Louis XIV',
    'Invention de l imprimerie',
    'Invention de la machine a vapeur',
    
  ];
  cardsHand = ['Mort de Louis XIV',
  'Invention de l imprimerie',
  'Invention de la machine a vapeur',];


  

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
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

  

}
