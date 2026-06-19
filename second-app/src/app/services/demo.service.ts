import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  getTestData() {
    return 'some dummy text';
  }

  getPromiseData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise data');
      }, 1000);
    });
  }

  getObservableData() {
    return of('observable data');
  }
}
