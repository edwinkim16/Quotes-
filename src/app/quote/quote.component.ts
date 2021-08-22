import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Hello world","This is my first program","Edwin",new Date(2021,9,24)),
    new Quotes("Chalk circle","You who have listened to story of chalk circle","Bertolt Brecht",new Date(2030,1,14)),
    new Quotes("Define world","We have 195 countries","Wikipedia",new Date(2021,1,8)),
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
