import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  editable: boolean = false;
  title = "List Of Courses"
  indexElement: number = -1
  myCourse: string = ""
  image: string | null = "https://images.pexels.com/photos/21391740/pexels-photo-21391740/free-photo-of-a-display-of-breads-in-wooden-shelves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  courses: string[] = ["Angular", "React"]

  addCourse() {
    this.courses.push(this.myCourse)
    this.myCourse = ""
    console.log('i want add a course to a list of courses', this.courses)
  }

  editCourse(data: string, index: number) {
    this.indexElement = index
    this.editable = true
    this.myCourse = data
  }

  updateCourse() {
    this.courses[this.indexElement] = this.myCourse
    this.editable = false
    this.myCourse = ""
  }

  deleteCourse(course: string, index: number) {
    // if(confirm('Are you sure to delete this course :' + course)) {
    //   this.courses.splice(index, 1)
    // }
    Swal.fire({
      title: "Are you sure?",
      text: `You won't delete this course: ${course}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.courses.splice(index, 1)

        Swal.fire({
          title: "Deleted!",
          text: `Your course: ${course} has been deleted.`,
          icon: "success",
          timer: 3000,
          timerProgressBar: true
        });
      }
    });
  }
}
