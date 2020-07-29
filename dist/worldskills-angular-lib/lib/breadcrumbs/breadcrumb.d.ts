import { Params } from '@angular/router';
export interface Breadcrumb {
    key: string;
    label: string;
    params?: Params;
    url: string;
}
