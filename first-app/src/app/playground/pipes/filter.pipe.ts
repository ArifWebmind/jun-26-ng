import { Pipe, PipeTransform } from '@angular/core';

type Todo = {
  label: string;
  status: string;
};

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(todoCollection: Todo[], filteredStatus: string): Todo[] {
    console.log('[TRANSFORM]');

    if (filteredStatus === '') {
      return todoCollection;
    }

    let resultArray = [];
    for (let todo of todoCollection) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}

// Create a pipe to sort the todo collection on the basis of Labels
