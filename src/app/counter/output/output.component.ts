import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  counter: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) => {
      console.log('calling counter state');
      this.counter = data;
    });
  }

}
