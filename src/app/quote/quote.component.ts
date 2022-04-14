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
      'Life is like a bicycle to keep your balance you must keep moving',
      'Paivy',
      'Albert Einstein',
      new Date()
    ),
    new Quote(
      1,
      'You will face many defeats in life but never let yourself be defeated',
      'Wendy',
      'Maya Angelou',
      new Date()
    ),
    new Quote(
      2,
      'Act as if what you do make a difference.It does',
      'Dante',
      'William James',
      new Date()
    ),
    new Quote(
      3,
      'The future belongs to those who see the beauty of their dreams',
      'Victor',
      'Eleanor Roosevelt',
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
  deleteQuote(index: number) {
    let toDelete = confirm(
      `Are you sure you want to delete ${this.quotes[index].name}`
    );

    if (toDelete) {
      this.quotes.splice(index, 1);
      // this.alertService.alertMe('Quote has been deleted');
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
