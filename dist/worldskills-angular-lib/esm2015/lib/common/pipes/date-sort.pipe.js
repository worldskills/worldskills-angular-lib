"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortPipe = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
class SortPipe {
    transform(items, direction, property) {
        // default direction ascending
        direction = direction === null || direction === undefined ? 'asc' : direction;
        return items.sort((a, b) => {
            // handle arrays or objects
            const left = property === null || property === undefined ? a : a[property];
            const right = property === null || property === undefined ? b : b[property];
            // if equal weighting is the same
            if (left === right) {
                return 0;
            }
            // handle ascending and descening sorts
            if (direction === 'desc') {
                return left < right ? 1 : -1;
            }
            else {
                return left < right ? -1 : 1;
            }
        });
    }
}
exports.SortPipe = SortPipe;
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "wsSort", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortPipe, [{
        type: core_1.Pipe,
        args: [{
                name: 'wsSort'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zb3J0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2NvbW1vbi9waXBlcy9kYXRlLXNvcnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7O0FBQ2xELE1BR2EsUUFBUTtJQUNsQixTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVUsRUFBRSxRQUFTO1FBQ3BDLDhCQUE4QjtRQUM5QixTQUFTLEdBQUcsU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUU5RSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsMkJBQTJCO1lBQzNCLE1BQU0sSUFBSSxHQUFHLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0UsTUFBTSxLQUFLLEdBQUcsUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU1RSxpQ0FBaUM7WUFDakMsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUNsQixPQUFPLENBQUMsQ0FBQzthQUNWO1lBRUQsdUNBQXVDO1lBQ3ZDLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7QUF6QkosNEJBMEJDO2dFQXZCWSxRQUFRO3lEQUFSLFFBQVE7a0RBQVIsUUFBUTtjQUhwQixXQUFJO2VBQUU7Z0JBQ0osSUFBSSxFQUFHLFFBQVE7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQFBpcGUgKHtcbiAgIG5hbWUgOiAnd3NTb3J0J1xufSlcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgdHJhbnNmb3JtKGl0ZW1zLCBkaXJlY3Rpb24/LCBwcm9wZXJ0eT8pOiBhbnlbXSB7XG4gICAgIC8vIGRlZmF1bHQgZGlyZWN0aW9uIGFzY2VuZGluZ1xuICAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IG51bGwgfHwgZGlyZWN0aW9uID09PSB1bmRlZmluZWQgPyAnYXNjJyA6IGRpcmVjdGlvbjtcblxuICAgICByZXR1cm4gaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgIC8vIGhhbmRsZSBhcnJheXMgb3Igb2JqZWN0c1xuICAgICAgIGNvbnN0IGxlZnQgPSBwcm9wZXJ0eSA9PT0gbnVsbCB8fCBwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkID8gYSA6IGFbcHJvcGVydHldO1xuICAgICAgIGNvbnN0IHJpZ2h0ID0gcHJvcGVydHkgPT09IG51bGwgfHwgcHJvcGVydHkgPT09IHVuZGVmaW5lZCA/IGIgOiBiW3Byb3BlcnR5XTtcblxuICAgICAgIC8vIGlmIGVxdWFsIHdlaWdodGluZyBpcyB0aGUgc2FtZVxuICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgfVxuXG4gICAgICAgLy8gaGFuZGxlIGFzY2VuZGluZyBhbmQgZGVzY2VuaW5nIHNvcnRzXG4gICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgICByZXR1cm4gbGVmdCA8IHJpZ2h0ID8gMSA6IC0xO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gbGVmdCA8IHJpZ2h0ID8gLTEgOiAxO1xuICAgICAgIH1cbiAgICB9KTtcbiAgIH1cbn1cbiJdfQ==