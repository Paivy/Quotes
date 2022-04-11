import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      0,
      'Paivy',
      'Life is like a bicycle to keep your balance you must keep moving',
      'Albert Einstein',
      new Date()
    ),
    new Quote(
      1,
      'Paivy',
      'Life is like a bicycle to keep your balance you must keep moving',
      'Albert Einstein',
      new Date()
    ),
  ];
  addNewQuote(quote: Quote): void {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.quoteDate = new Date(quote.quoteDate);
    this.quotes.push(quote);
  }
  addLikes(index: number) {
    this.quotes[index].showLikes++;
  }
  addDislikes(index: number) {
    this.quotes[index].showDislikes++;
  }
  constructor() {}

  ngOnInit(): void {}
}
