export class ErrorUtil {
    /*
     * Determine if an error objects contains a WS API Error
    */
    static hasApiError(error: any): boolean {
        return error.error && error.error.user_msg;
    }

    /*
     * Get the error message from an API Error
    */
    static getErrorMsg(error: any): string {
        if (error.error) {
            if (error.error.user_msg) {
                return error.error.user_msg;
            }
            if (error.error.dev_msg) {
                return error.error.dev_msg;
            }
        }

        return null;
    }
}
