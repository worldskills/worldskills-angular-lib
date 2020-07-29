"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpUtil = void 0;
const http_1 = require("@angular/common/http");
const array_util_1 = require("./array.util");
class HttpUtil {
    static objectToParams(obj) {
        let params = new http_1.HttpParams();
        Object.getOwnPropertyNames(params).forEach((propName, propIndex) => {
            const prop = obj[propName];
            if (array_util_1.ArrayUtil.isArray(prop)) {
                prop.forEach((item, valueIndex) => {
                    if (valueIndex === 0) {
                        params = params.set(propName, item);
                    }
                    else {
                        params = params.append(propName, item);
                    }
                });
            }
            else {
                params = params.set(propName, prop);
            }
        });
        return params;
    }
}
exports.HttpUtil = HttpUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9jb21tb24vdXRpbC9odHRwLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQWtEO0FBQ2xELDZDQUF5QztBQUN6QyxNQUFhLFFBQVE7SUFDbkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFPO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDakUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksc0JBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLElBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7b0JBQzNDLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTt3QkFDcEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNyQzt5QkFBTTt3QkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3hDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1FBRUgsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFyQkQsNEJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFycmF5VXRpbCB9IGZyb20gJy4vYXJyYXkudXRpbCc7XG5leHBvcnQgY2xhc3MgSHR0cFV0aWwge1xuICBzdGF0aWMgb2JqZWN0VG9QYXJhbXMob2JqOiB7fSk6IEh0dHBQYXJhbXMge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHBhcmFtcykuZm9yRWFjaCgocHJvcE5hbWUsIHByb3BJbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJvcCA9IG9ialtwcm9wTmFtZV07XG4gICAgICBpZiAoQXJyYXlVdGlsLmlzQXJyYXkocHJvcCkpIHtcbiAgICAgICAgKHByb3AgYXMgYW55W10pLmZvckVhY2goKGl0ZW0sIHZhbHVlSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zLnNldChwcm9wTmFtZSwgaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcE5hbWUsIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KHByb3BOYW1lLCBwcm9wKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxufVxuIl19