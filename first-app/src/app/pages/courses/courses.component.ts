import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../playground/services/course.service';
import { Course } from '../../model/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses!: Course[];

  private courseService = inject(CourseService);
  private router = inject(Router);

  ngOnInit(): void {
    this.courseService
      .fetchAll()
      .subscribe((courses) => (this.courses = courses));
  }

  onCourseClick(courseId: string) {
    this.router.navigateByUrl(`courses/${courseId}`);
  }
}
