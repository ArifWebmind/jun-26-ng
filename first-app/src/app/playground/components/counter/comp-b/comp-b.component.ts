import { Component, inject, Optional } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css',
  // providers: [CounterService],
})
export class CompBComponent {
  counterService = inject(CounterService);
}
