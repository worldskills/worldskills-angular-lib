import {Component, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
    selector: 'ws-select-async-header',
    template: '<ng-template #templateRef><ng-container *ngIf="isString">{{content}}</ng-container><ng-container *ngIf="!isString"><ng-template [ngTemplateOutlet]="content"></ng-template></ng-container></ng-template>',
    standalone: false
})
export class SelectAsyncHeaderComponent {

    @Input() content: string | TemplateRef<any> = '';
    @ViewChild('templateRef', {static: true}) templateRef;

    get isString(): boolean {
        return typeof this.content === 'string';
    }

}
