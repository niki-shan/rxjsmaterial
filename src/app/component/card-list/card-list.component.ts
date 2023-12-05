import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from 'src/app/models/course';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
 @Input() courseArray ! : Array<Icourse>
  constructor() { }

  ngOnInit(): void {
     
  }

}
