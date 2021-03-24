import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CoureService } from './course.service';

// Decorator
@Component ({ // Classe de componentes
  templateUrl: './course-list.component.html'
})

export class CourseListComponet implements OnInit {

  filteredCourses: Course[] = []
  
  _courses: Course[] = [] // representa o valor a exibir

  _filterBy: string

  constructor(private courseService: CoureService) { }
  
  ngOnInit(): void { // será chamado assim que o componet for criado
    this.retrieveAll()
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: course => {
        this._courses = course
        this.filteredCourses = this._courses
      },
      error: err => console.log('Error', err)
    })
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log(`Deleted with success`)
        this.retrieveAll()
      },
      error: err => console.log('Error: ', err)
    })
  }
  
  set filter(value: string) { // digitar no input
    this._filterBy = value

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
  }

  get filter() { // atualizar o input
    return this._filterBy
  }
  
}