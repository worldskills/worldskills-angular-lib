import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-entity-tree-selector-cache',
  templateUrl: './entity-tree-selector-cache.component.html',
  styleUrls: ['./entity-tree-selector-cache.component.css']
})
export class EntityTreeSelectorCacheComponent implements OnInit {

  entities1: Array<{ id: number }>;
  entities2: Array<{ id: number }>;
  entities3: Array<{ id: number }>;
  entities4: Array<{ id: number }>;

  constructor() {
  }

  ngOnInit(): void {
    this.entities1 = [{id: 1}];
    this.entities2 = [{id: 2}];
    this.entities3 = [{id: 3}];
    this.entities4 = [{id: 4}];
  }

}
