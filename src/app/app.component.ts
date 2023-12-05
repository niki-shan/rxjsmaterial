import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { Icourse } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'rxjsmaterial';


constructor(private _courseservice : CoursesService,
  private http :HttpClientModule){

}

  ngOnInit(): void {
    
 
}}
