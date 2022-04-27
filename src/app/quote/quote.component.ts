import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'The journey of a thousand miles begins with one step.', 'Author:Lao Tzu', new Date(2020,3,14),0,0),
    new Quote(2, 'That which does not kill us makes us stronger.', 'Author:Friedrich Nietzsche', new Date(2019,6,9),0,0),
    new Quote(1, 'The ability to learn is the most important quality a leader can have.', 'Author:Padmasree Warrior', new Date (2020,0,6),0,0),
  ];

  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }

  toggleAuthor(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
