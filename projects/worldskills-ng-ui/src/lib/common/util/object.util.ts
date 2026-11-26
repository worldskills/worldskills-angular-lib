export class ObjectUtil {

    static stripUndefined(obj: any, deep = false): any {
        if (Array.isArray(obj)) {
            if (deep) {
                // tslint:disable-next-line:forin
                for (const k in obj) {
                    obj[k] = ObjectUtil.stripUndefined(obj[k], true);
                }
            }
        } else if (obj && typeof obj === 'object') {
            Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
        }
        return obj;
    }

    static stripNullOrUndefined(obj: any, deep = false): any {
        if (Array.isArray(obj)) {
            if (deep) {
                // tslint:disable-next-line:forin
                for (const k in obj) {
                    obj[k] = ObjectUtil.stripNullOrUndefined(obj[k], true);
                }
            }
        } else if (obj && typeof obj === 'object') {
            Object.keys(obj).forEach(key => (obj[key] === undefined || obj[key] === null) && delete obj[key]);
        }
        return obj;
    }

}
