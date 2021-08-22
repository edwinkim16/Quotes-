import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    {name:"Hello World", description:"this is my first program",author:"Edwin"},
    {name:"Define world", description:"We have 171 countries",author:"Grusha"},
    {name:"Caucasian", description:"This is a novel",author:"Azdak"}
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
