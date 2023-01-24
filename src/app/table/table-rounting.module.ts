import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TableSelectedComponent } from './table-selected/table-selected.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path : 'table',
        component : TableComponent
      },
      {
        path : '**',
        redirectTo : 'table'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableRountingModule { }
