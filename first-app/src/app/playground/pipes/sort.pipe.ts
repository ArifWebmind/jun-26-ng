import { Pipe, PipeTransform } from '@angular/core';

type Todo = {
  label: string;
  status: string;
};

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(todoCollection: Todo[], order?: 'asc' | 'desc'): Todo[] {
    if (order === 'desc') {
      return todoCollection.sort((a: Todo, b: Todo) => {
        if (a.label > b.label) {
          return -1;
        } else if (b.label > a.label) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return todoCollection.sort((a: Todo, b: Todo) => {
        if (a.label > b.label) {
          return 1;
        } else if (b.label > a.label) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }
}
