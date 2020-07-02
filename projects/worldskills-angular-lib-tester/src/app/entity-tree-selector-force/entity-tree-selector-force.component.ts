import {Component, OnInit} from '@angular/core';
import {EntityTreeSelectRefreshMode} from '../../../../worldskills-angular-lib/src/lib/entity-tree-select/entity-tree-select.component';

@Component({
  selector: 'app-entity-tree-selector-force',
  templateUrl: './entity-tree-selector-force.component.html',
  styleUrls: ['./entity-tree-selector-force.component.css']
})
export class EntityTreeSelectorForceComponent implements OnInit {

  EntityTreeSelectRefreshMode = EntityTreeSelectRefreshMode;
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
