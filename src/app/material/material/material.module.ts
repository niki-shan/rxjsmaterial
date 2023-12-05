import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import{MatDialogModule}from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from 'src/app/app-routing.module';
import{MatDatepickerModule}from '@angular/material/datepicker'
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';







const rootArray =[
  MatRippleModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatDialogModule,
  AppRoutingModule,
  MatSelectModule,
  MatDatepickerModule,
  MatListModule,
  MatTabsModule
  // MatMomentDateModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...rootArray
  ],
  exports:[
    ...rootArray
  ]
})

export class MaterialModule { }
