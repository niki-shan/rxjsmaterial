import { Component, OnInit } from '@angular/core';
import { Icourse } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseList ! : Array<Icourse>
  beginner ! : Array<Icourse>
  advanced ! : Array<Icourse>
 
  constructor(private _courseservice : CoursesService) { }

  ngOnInit(): void {

    
    this. _courseservice.getAllCourses()
    .subscribe(res => {
      // this.courseList = res ['payload']
     this.beginner = res.filter(course => course.category == "BEGINNER")
     this.advanced = res.filter (course => course.category == "ADVANCED")
     
      console.log(res);
      
      
      
    })
  }
  }


