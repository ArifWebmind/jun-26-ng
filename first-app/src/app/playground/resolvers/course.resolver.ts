import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CourseService } from '../services/course.service';
import { EMPTY } from 'rxjs';
import { Course } from '../../model/course';

export const courseResolver: ResolveFn<Course> = (route, state) => {
  let courseService = inject(CourseService);
  const courseId = route.paramMap.get('courseId');
  if (!courseId) {
    return EMPTY;
  }
  return courseService.fetchById(courseId);
};
