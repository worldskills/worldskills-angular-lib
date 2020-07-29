import { AlertType } from './alert-type';
export interface Alert {
    id: string;
    type: AlertType;
    title: string;
    message: string;
    closable: boolean;
}
