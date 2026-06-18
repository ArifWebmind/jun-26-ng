import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Course } from '../../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000/courses';

  private httpClient = inject(HttpClient);

  constructor() {}

  fetchAll() {
    return this.httpClient.get<Course[]>(this.baseUrl);
  }
}
