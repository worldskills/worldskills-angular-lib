import {Component, OnInit} from '@angular/core';
import {EntityTreeSelectRefreshMode} from '../../../../worldskills-angular-lib/src/lib/entity-tree-select/entity-tree-select.component';
import {EntityTreeService} from '../../../../worldskills-angular-lib/src/lib/services/entity-tree.service';

@Component({
  selector: 'app-entity-tree-selector-manual',
  templateUrl: './entity-tree-selector-manual.component.html',
  styleUrls: ['./entity-tree-selector-manual.component.css']
})
export class EntityTreeSelectorManualComponent implements OnInit {

  EntityTreeSelectRefreshMode = EntityTreeSelectRefreshMode;
  entities1: Array<{ id: number }>;
  entities2: Array<{ id: number }>;
  entities3: Array<{ id: number }>;
  entities4: Array<{ id: number }>;

  constructor(private entityTreeService: EntityTreeService) {
  }

  ngOnInit(): void {
    this.entities1 = [{id: 1}];
    this.entities2 = [{id: 2}];
    this.entities3 = [{id: 3}];
    this.entities4 = [{id: 4}];
    // control when you fetch data for selects
    this.entityTreeService.list({
      limit: 9999,
      offset: 0,
      depth: 9999
    });
  }

}
