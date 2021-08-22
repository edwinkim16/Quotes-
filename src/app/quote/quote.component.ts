import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Hello world","This is my first program","Edwin"),
    new Quotes("Chalk circle","You who have listened to story of chalk circle","Bertolt Brecht"),
    new Quotes("Define world","We have 195 countries","Wikipedia"),
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
