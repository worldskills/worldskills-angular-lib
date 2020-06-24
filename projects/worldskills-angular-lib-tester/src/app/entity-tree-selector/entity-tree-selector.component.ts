import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-tree-selector',
  templateUrl: './entity-tree-selector.component.html',
  styleUrls: ['./entity-tree-selector.component.css']
})
export class EntityTreeSelectorComponent implements OnInit {

  entities: Array<{id: number}>;

  constructor() { }

  ngOnInit(): void {
    this.entities = [{id: 1}];
  }

}
