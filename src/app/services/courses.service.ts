import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourse, IcourseRes } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
   courseUrl : string = `${environment.baseUrl}/courses`
  constructor( private _http : HttpClient) { }


  getAllCourses():Observable<Array<Icourse>>{
    return this._http.get<IcourseRes>(this.courseUrl)
     .pipe(
      map( res => {
        return res ['payload']
      })
     )
      
    
  }
}
