"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const i0 = require("@angular/core");
const i1 = require("@angular/common/http");
class UploadService {
    constructor(http) {
        this.http = http;
    }
    prepareUpload(url, data, params, method = 'POST') {
        const options = {
            params,
            reportProgress: true,
        };
        return new http_1.HttpRequest(method, url, data, options);
    }
    // Full list of events: https://angular.io/api/common/http/HttpEventType
    // event specific classes: https://angular.io/api/common/http/HttpEvent#description
    listen(request, progress, complete) {
        this.http.request(request).subscribe((event) => {
            switch (event.type) {
                case http_1.HttpEventType.UploadProgress:
                    progress(event);
                    break;
                case http_1.HttpEventType.Response:
                    complete(event);
                    break;
            }
        });
    }
}
exports.UploadService = UploadService;
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(i0.ɵɵinject(i1.HttpClient)); };
UploadService.ɵprov = i0.ɵɵdefineInjectable({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UploadService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlcy91cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFDM0MsK0NBQXNJOzs7QUFFdEksTUFHYSxhQUFhO0lBRXhCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRWxDLGFBQWEsQ0FBQyxHQUFXLEVBQUUsSUFBYyxFQUFFLE1BQWtCLEVBQUUsTUFBTSxHQUFHLE1BQU07UUFDbkYsTUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNO1lBQ04sY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQztRQUVGLE9BQU8sSUFBSSxrQkFBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsbUZBQW1GO0lBQzVFLE1BQU0sQ0FDWCxPQUE4QixFQUM5QixRQUErQyxFQUMvQyxRQUE2QztRQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDM0QsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLG9CQUFhLENBQUMsY0FBYztvQkFDL0IsUUFBUSxDQUFDLEtBQTBCLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUixLQUFLLG9CQUFhLENBQUMsUUFBUTtvQkFDekIsUUFBUSxDQUFDLEtBQXdCLENBQUMsQ0FBQztvQkFDbkMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQWpDSCxzQ0FrQ0M7MEVBL0JZLGFBQWE7cURBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTtrREFFUCxhQUFhO2NBSHpCLGlCQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwRXZlbnQsIEh0dHBSZXF1ZXN0LCBIdHRwUHJvZ3Jlc3NFdmVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXZlbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHB1YmxpYyBwcmVwYXJlVXBsb2FkKHVybDogc3RyaW5nLCBkYXRhOiBGb3JtRGF0YSwgcGFyYW1zOiBIdHRwUGFyYW1zLCBtZXRob2QgPSAnUE9TVCcpOiBIdHRwUmVxdWVzdDxGb3JtRGF0YT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBGdWxsIGxpc3Qgb2YgZXZlbnRzOiBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9odHRwL0h0dHBFdmVudFR5cGVcbiAgLy8gZXZlbnQgc3BlY2lmaWMgY2xhc3NlczogaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vaHR0cC9IdHRwRXZlbnQjZGVzY3JpcHRpb25cbiAgcHVibGljIGxpc3RlbjxUPihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxGb3JtRGF0YT4sXG4gICAgcHJvZ3Jlc3M6IChwcm9ncmVzczogSHR0cFByb2dyZXNzRXZlbnQpID0+IHZvaWQsXG4gICAgY29tcGxldGU6IChyZXNwb25zZTogSHR0cFJlc3BvbnNlPFQ+KSA9PiB2b2lkKTogdm9pZCB7XG5cbiAgICB0aGlzLmh0dHAucmVxdWVzdChyZXF1ZXN0KS5zdWJzY3JpYmUoKGV2ZW50OiBIdHRwRXZlbnQ8VD4pID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M6XG4gICAgICAgICAgcHJvZ3Jlc3MoZXZlbnQgYXMgSHR0cFByb2dyZXNzRXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgICAgY29tcGxldGUoZXZlbnQgYXMgSHR0cFJlc3BvbnNlPFQ+KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19