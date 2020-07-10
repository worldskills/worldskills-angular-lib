import {Component, OnInit, ViewChild} from '@angular/core';
import { EntityTreeSelectControls, EntityTreeSelectLabels } from 'worldskills-angular-lib';

@Component({
  selector: 'app-entity-tree-selector-customizations',
  templateUrl: './entity-tree-selector-customizations.component.html',
  styleUrls: ['./entity-tree-selector-customizations.component.css']
})
export class EntityTreeSelectorCustomizationsComponent implements OnInit {

  entities: Array<{ id: number }>;
  labels: EntityTreeSelectLabels;
  controls: EntityTreeSelectControls;

  @ViewChild('wrapper', {static: true}) wrapper;
  @ViewChild('expand', {static: true}) expand;
  @ViewChild('expandAll', {static: true}) expandAll;
  @ViewChild('collapse', {static: true}) collapse;
  @ViewChild('collapseAll', {static: true}) collapseAll;
  @ViewChild('separator', {static: true}) separator;
  @ViewChild('showing', {static: true}) showing;

  constructor() {
  }

  ngOnInit(): void {
    this.entities = [{id: 1}];
    this.labels = {
      clearAllText: 'CLEAR ALL',
      loadingText: 'LOADING',
      notFoundText: 'NOT FOUND',
      placeholder: 'PLACEHOLDER',
      typeToSearchText: 'TYPE TO SEARCH'
    };
    this.controls = {
      wrapper: this.wrapper,
      expand: this.expand,
      expandAll: this.expandAll,
      collapse: this.collapse,
      collapseAll: this.collapseAll,
      separator: this.separator,
      showing: this.showing,
    };
  }

}
