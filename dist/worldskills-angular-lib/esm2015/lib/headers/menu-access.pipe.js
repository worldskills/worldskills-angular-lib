"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAccessPipe = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
class MenuAccessPipe {
    transform(items, isLoggedIn, roles) {
        if (items === null || items === undefined) {
            return [];
        }
        return items.filter(item => {
            // item doesn't exist, don't display it
            if (item === undefined || item === null) {
                return false;
            }
            // item is meant to be hidden
            if (item.hidden) {
                return false;
            }
            // item requires a logged in user
            if (item.requireLogin && !isLoggedIn) {
                return false;
            }
            // item doesn not require role permissions
            if (item.requiredRoles.length === 0) {
                return true;
            }
            // item requires role permissions
            let show = false;
            for (const roleName of item.requiredRoles) {
                show = roles.findIndex(userRoleName => userRoleName === roleName) !== -1;
                if (show) {
                    break;
                }
            }
            return show;
        });
    }
}
exports.MenuAccessPipe = MenuAccessPipe;
MenuAccessPipe.ɵfac = function MenuAccessPipe_Factory(t) { return new (t || MenuAccessPipe)(); };
MenuAccessPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "wsMenuAccesssFilter", type: MenuAccessPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuAccessPipe, [{
        type: core_1.Pipe,
        args: [{
                name: 'wsMenuAccesssFilter'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1hY2Nlc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvaGVhZGVycy9tZW51LWFjY2Vzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDs7QUFHbEQsTUFHYSxjQUFjO0lBQ3hCLFNBQVMsQ0FBQyxLQUFpQixFQUFFLFVBQW1CLEVBQUUsS0FBZTtRQUMvRCxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLHVDQUF1QztZQUN2QyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDdkMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELDZCQUE2QjtZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELGlDQUFpQztZQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBRSxVQUFVLEVBQUU7Z0JBQ3JDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCwwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxpQ0FBaUM7WUFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekMsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRXpFLElBQUksSUFBSSxFQUFFO29CQUNSLE1BQU07aUJBQ1A7YUFDRjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQTFDSix3Q0EyQ0M7NEVBeENZLGNBQWM7NEVBQWQsY0FBYztrREFBZCxjQUFjO2NBSDFCLFdBQUk7ZUFBRTtnQkFDSixJQUFJLEVBQUcscUJBQXFCO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9tZW51LWl0ZW0nO1xuXG5AUGlwZSAoe1xuICAgbmFtZSA6ICd3c01lbnVBY2Nlc3NzRmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNZW51QWNjZXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgdHJhbnNmb3JtKGl0ZW1zOiBNZW51SXRlbVtdLCBpc0xvZ2dlZEluOiBib29sZWFuLCByb2xlczogc3RyaW5nW10pOiBNZW51SXRlbVtdIHtcbiAgICAgaWYgKGl0ZW1zID09PSBudWxsIHx8IGl0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICByZXR1cm4gW107XG4gICAgIH1cblxuICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgLy8gaXRlbSBkb2Vzbid0IGV4aXN0LCBkb24ndCBkaXNwbGF5IGl0XG4gICAgICBpZiAoaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBpdGVtIGlzIG1lYW50IHRvIGJlIGhpZGRlblxuICAgICAgaWYgKGl0ZW0uaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXRlbSByZXF1aXJlcyBhIGxvZ2dlZCBpbiB1c2VyXG4gICAgICBpZiAoaXRlbS5yZXF1aXJlTG9naW4gJiYgISBpc0xvZ2dlZEluKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXRlbSBkb2VzbiBub3QgcmVxdWlyZSByb2xlIHBlcm1pc3Npb25zXG4gICAgICBpZiAoaXRlbS5yZXF1aXJlZFJvbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXRlbSByZXF1aXJlcyByb2xlIHBlcm1pc3Npb25zXG4gICAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgICAgZm9yIChjb25zdCByb2xlTmFtZSBvZiBpdGVtLnJlcXVpcmVkUm9sZXMpIHtcbiAgICAgICAgc2hvdyA9IHJvbGVzLmZpbmRJbmRleCh1c2VyUm9sZU5hbWUgPT4gdXNlclJvbGVOYW1lID09PSByb2xlTmFtZSkgIT09IC0xO1xuXG4gICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNob3c7XG4gICAgIH0pO1xuICAgfVxufVxuIl19