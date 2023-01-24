import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRountingModule } from './table-rounting.module';
import { TableComponent } from './table/table.component';
import { TableSelectedComponent } from './table-selected/table-selected.component';



@NgModule({
  declarations: [
    TableComponent,
    TableSelectedComponent
  ],
  imports: [
    CommonModule,
    TableRountingModule
  ]
})
export class TableModule { }
