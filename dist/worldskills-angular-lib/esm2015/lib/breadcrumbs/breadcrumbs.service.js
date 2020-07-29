"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbsService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const generic_util_1 = require("../common/util/generic.util");
const i0 = require("@angular/core");
class BreadcrumbsService {
    constructor() {
        this.breadcrumbs = [];
        this.replacements = [];
        this.breadcrumbsSubject = new rxjs_1.BehaviorSubject([]);
    }
    build(route, url = '') {
        if (route.outlet === this.targetOutlet) {
            const path = route.snapshot.url.map(segment => segment.path).join('/');
            url = `${url}/${path}`;
            this.isAtHome = path === this.homeItemRoute.replace('/', '');
            if (route.snapshot.data.hasOwnProperty('breadcrumb')) {
                const breadcrumb = {
                    key: route.snapshot.data.breadcrumb.key,
                    label: route.snapshot.data.breadcrumb.label,
                    params: route.snapshot.params,
                    url
                };
                // handle key replacements before breadcrumbs are initialized
                const replacementIndex = this.replacements.findIndex(r => r.key === breadcrumb.label);
                if (replacementIndex !== -1) {
                    breadcrumb.label = this.replacements[replacementIndex].value;
                }
                this.breadcrumbs.push(breadcrumb);
                this.breadcrumbsSubject.next(this.breadcrumbs);
            }
            // nothing to do
            if (route.children.length === 0) {
                return;
            }
            route.children.forEach(child => {
                this.build(child, url);
            });
        }
    }
    createOrUpdateReplacement(key, value) {
        let index = this.replacements.findIndex(x => x.key === key);
        if (index === -1) {
            const replacement = { key, value };
            this.replacements.push(replacement);
            index = this.replacements.findIndex(x => x.key === key);
        }
        else {
            this.replacements[index].value = value;
        }
        return index;
    }
    replaceLabel(key, value) {
        const replacementIndex = this.createOrUpdateReplacement(key, value);
        if (generic_util_1.GenericUtil.isNullOrUndefined(this.breadcrumbs)) {
            return;
        }
        if (this.breadcrumbs.length === 0) {
            return;
        }
        this.breadcrumbs.forEach((b, i) => {
            if (b.key === key) {
                this.breadcrumbs[i].label = value;
            }
        });
        this.breadcrumbsSubject.next(this.breadcrumbs);
    }
    // this method should only be used after the breadcrumb is initialized
    remove(key) {
        const index = this.breadcrumbs.findIndex(x => x.key === key);
        if (index !== -1) {
            this.breadcrumbs.splice(index, 1);
            this.breadcrumbsSubject.next(this.breadcrumbs);
        }
    }
    // this method should only be used after the breadcrumb is initialized
    add(breadcrumb) {
        const index = this.breadcrumbs.findIndex(x => x.key === breadcrumb.key);
        if (index !== -1) {
            rxjs_1.throwError(`key "${breadcrumb.key}" already exists`);
            return;
        }
        this.breadcrumbs.push(breadcrumb);
        this.breadcrumbsSubject.next(this.breadcrumbs);
    }
}
exports.BreadcrumbsService = BreadcrumbsService;
BreadcrumbsService.ɵfac = function BreadcrumbsService_Factory(t) { return new (t || BreadcrumbsService)(); };
BreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbsService, factory: BreadcrumbsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbsService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFJM0MsK0JBQW1EO0FBQ25ELDhEQUEwRDs7QUFFMUQsTUFHYSxrQkFBa0I7SUFjN0I7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxzQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxLQUFLLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUU7UUFDbEQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNwRCxNQUFNLFVBQVUsR0FBZTtvQkFDN0IsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFH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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsc0VBQXNFO0lBQy9ELEdBQUcsQ0FBQyxVQUFzQjtRQUMvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLGlCQUFVLENBQUMsUUFBUSxVQUFVLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3JELE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0FBN0dILGdEQThHQztvRkEzR1ksa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNO2tEQUVQLGtCQUFrQjtjQUg5QixpQkFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdlbmVyaWNVdGlsIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwvZ2VuZXJpYy51dGlsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNTZXJ2aWNlIHtcblxuICBwcm90ZWN0ZWQgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJbXTtcblxuICBwdWJsaWMgYnJlYWRjcnVtYnNTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8QnJlYWRjcnVtYltdPjtcblxuICBwdWJsaWMgaG9tZUl0ZW1Sb3V0ZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBpc0F0SG9tZTogYm9vbGVhbjtcblxuICBwdWJsaWMgdGFyZ2V0T3V0bGV0OiBzdHJpbmc7XG5cbiAgcHVibGljIHJlcGxhY2VtZW50czogS2V5VmFsdWU8c3RyaW5nLCBzdHJpbmc+W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5icmVhZGNydW1icyA9IFtdO1xuICAgIHRoaXMucmVwbGFjZW1lbnRzID0gW107XG4gICAgdGhpcy5icmVhZGNydW1ic1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHVybDogc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICBpZiAocm91dGUub3V0bGV0ID09PSB0aGlzLnRhcmdldE91dGxldCkge1xuICAgICAgY29uc3QgcGF0aCA9IHJvdXRlLnNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgICAgIHVybCA9IGAke3VybH0vJHtwYXRofWA7XG4gICAgICB0aGlzLmlzQXRIb21lID0gcGF0aCA9PT0gdGhpcy5ob21lSXRlbVJvdXRlLnJlcGxhY2UoJy8nLCAnJyk7XG4gICAgICBpZiAocm91dGUuc25hcHNob3QuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnYnJlYWRjcnVtYicpKSB7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWIgPSB7XG4gICAgICAgICAga2V5OiByb3V0ZS5zbmFwc2hvdC5kYXRhLmJyZWFkY3J1bWIua2V5LFxuICAgICAgICAgIGxhYmVsOiByb3V0ZS5zbmFwc2hvdC5kYXRhLmJyZWFkY3J1bWIubGFiZWwsXG4gICAgICAgICAgcGFyYW1zOiByb3V0ZS5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgdXJsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaGFuZGxlIGtleSByZXBsYWNlbWVudHMgYmVmb3JlIGJyZWFkY3J1bWJzIGFyZSBpbml0aWFsaXplZFxuICAgICAgICBjb25zdCByZXBsYWNlbWVudEluZGV4ID0gdGhpcy5yZXBsYWNlbWVudHMuZmluZEluZGV4KHIgPT4gci5rZXkgPT09IGJyZWFkY3J1bWIubGFiZWwpO1xuICAgICAgICBpZiAocmVwbGFjZW1lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBicmVhZGNydW1iLmxhYmVsID0gdGhpcy5yZXBsYWNlbWVudHNbcmVwbGFjZW1lbnRJbmRleF0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnNTdWJqZWN0Lm5leHQodGhpcy5icmVhZGNydW1icyk7XG4gICAgICB9XG4gICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgICAgY2hpbGQgPT4ge1xuICAgICAgICAgIHRoaXMuYnVpbGQoY2hpbGQsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZU9yVXBkYXRlUmVwbGFjZW1lbnQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBpbmRleCA9IHRoaXMucmVwbGFjZW1lbnRzLmZpbmRJbmRleCh4ID0+IHgua2V5ID09PSBrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0geyBrZXksIHZhbHVlIH07XG4gICAgICB0aGlzLnJlcGxhY2VtZW50cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICAgIGluZGV4ID0gdGhpcy5yZXBsYWNlbWVudHMuZmluZEluZGV4KHggPT4geC5rZXkgPT09IGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVwbGFjZW1lbnRzW2luZGV4XS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlTGFiZWwoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEluZGV4ID0gdGhpcy5jcmVhdGVPclVwZGF0ZVJlcGxhY2VtZW50KGtleSwgdmFsdWUpO1xuICAgIGlmIChHZW5lcmljVXRpbC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmJyZWFkY3J1bWJzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJyZWFkY3J1bWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYnJlYWRjcnVtYnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xuICAgICAgaWYgKGIua2V5ID09PSBrZXkpIHtcbiAgICAgICAgdGhpcy5icmVhZGNydW1ic1tpXS5sYWJlbCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5icmVhZGNydW1ic1N1YmplY3QubmV4dCh0aGlzLmJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIHVzZWQgYWZ0ZXIgdGhlIGJyZWFkY3J1bWIgaXMgaW5pdGlhbGl6ZWRcbiAgcHVibGljIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5icmVhZGNydW1icy5maW5kSW5kZXgoeCA9PiB4LmtleSA9PT0ga2V5KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmJyZWFkY3J1bWJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmJyZWFkY3J1bWJzU3ViamVjdC5uZXh0KHRoaXMuYnJlYWRjcnVtYnMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIHVzZWQgYWZ0ZXIgdGhlIGJyZWFkY3J1bWIgaXMgaW5pdGlhbGl6ZWRcbiAgcHVibGljIGFkZChicmVhZGNydW1iOiBCcmVhZGNydW1iKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJyZWFkY3J1bWJzLmZpbmRJbmRleCh4ID0+IHgua2V5ID09PSBicmVhZGNydW1iLmtleSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhyb3dFcnJvcihga2V5IFwiJHticmVhZGNydW1iLmtleX1cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYnJlYWRjcnVtYnMucHVzaChicmVhZGNydW1iKTtcbiAgICB0aGlzLmJyZWFkY3J1bWJzU3ViamVjdC5uZXh0KHRoaXMuYnJlYWRjcnVtYnMpO1xuICB9XG59XG4iXX0=