import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(
    private TableDataService : TableDataService
  ) { }

  public rowsSelected : any = [];
  public selectionIsVisible : boolean = false;

  public users :Register[] = []

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.TableDataService.getRegisters()
    .subscribe(res =>{
      this.users = res
    });
  }

  selectRows(user:any){
   
    if(this.rowsSelected.includes(user)){
      this.rowsSelected = this.rowsSelected.filter((row:any) => row != user);
    } else{
      this.rowsSelected.push(user);
    }
       
      
  }
  cleanSelection(){
   
   this.rowsSelected = []
       
      
  }

  showSelection(){
    this.selectionIsVisible = !this.selectionIsVisible
  }

}
