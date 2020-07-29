"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertService = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
class AlertService {
    constructor() {
        this.alerts = [];
    }
    remove(id) {
        const index = this.alerts.findIndex(item => item.id === id);
        if (index !== -1) {
            this.alerts.splice(index, 1);
        }
    }
    setAlert(id, type, title, message, closable) {
        title = title || '';
        message = message || '';
        closable = closable || false;
        this.alerts.push({
            id, type, title, message, closable
        });
    }
}
exports.AlertService = AlertService;
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = i0.ɵɵdefineInjectable({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYWxlcnRzL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTJDOztBQUkzQyxNQUdhLFlBQVk7SUFHdkI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQVU7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFTSxRQUFRLENBQUMsRUFBVSxFQUFFLElBQWUsRUFBRSxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxRQUFrQjtRQUMvRixLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixRQUFRLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBeEJILG9DQXlCQzt3RUF0QlksWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO2tEQUVQLFlBQVk7Y0FIeEIsaUJBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tICcuL2FsZXJ0LXR5cGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuICBwdWJsaWMgYWxlcnRzOiBBbGVydFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWxlcnRzID0gW107XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxlcnRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGVydChpZDogc3RyaW5nLCB0eXBlOiBBbGVydFR5cGUsIHRpdGxlPzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nLCBjbG9zYWJsZT86IGJvb2xlYW4pOiB2b2lkICB7XG4gICAgdGl0bGUgPSB0aXRsZSB8fCAnJztcbiAgICBtZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgICBjbG9zYWJsZSA9IGNsb3NhYmxlIHx8IGZhbHNlO1xuICAgIHRoaXMuYWxlcnRzLnB1c2goe1xuICAgICAgaWQsIHR5cGUsIHRpdGxlLCBtZXNzYWdlLCBjbG9zYWJsZVxuICAgIH0pO1xuICB9XG59XG4iXX0=