import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ButtonsComponent } from './buttons/buttons.component';
import { CounterCustomInputComponent } from './counter-custom-input/counter-custom-input.component';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './output/output.component';
import { counterReducer } from './state/counter.reducers';
import { COUNTER_STATE_NAME } from './state/counter.selectors';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
    CounterCustomInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ],
})
export class CounterModule {}