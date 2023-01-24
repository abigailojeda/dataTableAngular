import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-table-selected',
  templateUrl: './table-selected.component.html',
  styleUrls: ['./table-selected.component.scss']
})
export class TableSelectedComponent {
  @Output() showSelection = new EventEmitter();
  @Input() selection:any;

  public toggleSelectionIsVisible(){
    this.showSelection.emit();
  }
  

}
