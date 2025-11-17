import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest, of} from 'rxjs';

@Component({
    selector: 'ws-panel-row-actions',
    templateUrl: './panel-row-actions.component.html',
    styleUrls: ['./panel-row-actions.component.css'],
    standalone: false
})
export class PanelRowActionsComponent implements OnInit {

  @Output() edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() view: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Input() editLabel: string = null;
  @Input() viewLabel: string = null;
  @Input() deleteLabel: string = null;
  @Input() editDisabled = false;
  @Input() viewDisabled = false;
  @Input() deleteDisabled = false;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    const editLabelObservable = this.editLabel != null ? of(this.editLabel) : this.translateService.get('edit');
    const viewLabelObservable = this.viewLabel != null ? of(this.viewLabel) : this.translateService.get('view');
    const deleteLabelObservable = this.deleteLabel != null ? of(this.deleteLabel) : this.translateService.get('delete');
    combineLatest([
      editLabelObservable,
      viewLabelObservable,
      deleteLabelObservable
    ]).subscribe(([editLabel, viewLabel, deleteLabel]) => {
      this.editLabel = editLabel;
      this.viewLabel = viewLabel;
      this.deleteLabel = deleteLabel;
    });
  }

}
