import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  editable: boolean = false;
  title = "List Of Courses"
  myCourse: string = ""
  image: string | null = "https://images.pexels.com/photos/21391740/pexels-photo-21391740/free-photo-of-a-display-of-breads-in-wooden-shelves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  courses: string[] = ["Angular", "React"]

  addCourse() {
    this.courses.push(this.myCourse)
    this.myCourse = ""
    console.log('i want add a course to a list of courses', this.courses)
  }

  editCourse(data: string) {
    this.editable = true
    this.myCourse = data
  }

  updateCourse() {}
}
