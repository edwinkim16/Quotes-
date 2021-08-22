import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isPlus = new EventEmitter<boolean>();
  @Output() isMinus= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quotePlus(plus:boolean){
    this.isPlus.emit(plus);
  }

  quoteMinus(minus:boolean){
    this.isMinus.emit(minus);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
