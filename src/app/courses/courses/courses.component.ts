import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  // coursesService: CoursesService;

  constructor(private CoursesService: CoursesService) {
    // this.coursesService = new CoursesService();
    this.courses$ = this.CoursesService.list();
  }
}
