import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customInput } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.scss']
})
export class CounterCustomInputComponent implements OnInit {
  value: number;
  channelName: string;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((data) => {
      console.log('calling channelName state');
      this.channelName = data;
    });
  }
  
  onAdd() {
    this.store.dispatch(customInput({value: +this.value}));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }

}
