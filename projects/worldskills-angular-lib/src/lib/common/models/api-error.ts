export interface APIError {
    code: string;
    // tslint:disable-next-line:variable-name
    user_msg: string;
    // tslint:disable-next-line:variable-name
    dev_msg: string;
    errors: any;
}
