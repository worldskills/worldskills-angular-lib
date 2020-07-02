import {Component, OnInit} from '@angular/core';
import {WsSelectChangeEvent} from '../../../../worldskills-angular-lib/src/lib/directives/select/select.directive';

interface ExampleDataStructure {
  x: number;
  y: {
    a: string
  };
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  items: Array<ExampleDataStructure> = [{x: 1, y: {a: 'a'}}, {x: 2, y: {a: 'b'}}, {x: 3, y: {a: 'c'}}];

  constructor() {
  }

  ngOnInit(): void {
  }

  onOriginalChange(entry: { label: string, value: string }) {
    console.log(entry);
  }

  onChange(change: WsSelectChangeEvent<ExampleDataStructure, number>) {
    console.log(change);
  }

  onDeconstructedChange1({item}: WsSelectChangeEvent<ExampleDataStructure, number>) {
    console.log(item);
  }

  onDeconstructedChange2({value}: WsSelectChangeEvent<ExampleDataStructure, number>) {
    console.log(value);
  }

  labelReader(obj: ExampleDataStructure) {
    return obj.y.a;
  }

}
