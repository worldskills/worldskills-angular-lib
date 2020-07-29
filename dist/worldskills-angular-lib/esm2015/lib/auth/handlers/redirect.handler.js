"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectHandler = exports.RETURN_URL_KEY = void 0;
exports.RETURN_URL_KEY = 'returnUrl';
class RedirectHandler {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    redirectOrReturn(redirectRoute, failure) {
        if (!this.service.isLoggedIn()) {
            this.service.login();
        }
        else {
            if (this.hasReturnUrl()) {
                this.handleReturnUrl(error => failure(error));
            }
            else {
                this.service.loadUserProfile(next => {
                    sessionStorage.removeItem(exports.RETURN_URL_KEY);
                    this.redirectUserToRoute(next, redirectRoute);
                }, error => {
                    failure(error);
                });
            }
        }
    }
    hasReturnUrl() {
        const returnUrl = sessionStorage.getItem(exports.RETURN_URL_KEY);
        return returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined';
    }
    handleReturnUrl(failure) {
        const returnUrl = sessionStorage.getItem(exports.RETURN_URL_KEY);
        sessionStorage.removeItem(exports.RETURN_URL_KEY);
        this.service.loadUserProfile(next => this.redirectUserToUrl(next, returnUrl), error => failure(error));
    }
    // override this method to catch a user being redirected to a specific returnUrl (when a user pastes a link in the browser)
    redirectUserToUrl(user, returnUrl) {
        this.router.navigateByUrl(returnUrl);
    }
    // override this method to catcch a user being redirected to the homepage route. useful if you need to load the homepage from the DB
    redirectUserToRoute(user, route) {
        this.router.navigate(route);
    }
}
exports.RedirectHandler = RedirectHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXJlY3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYXV0aC9oYW5kbGVycy9yZWRpcmVjdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlhLFFBQUEsY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUMxQyxNQUFhLGVBQWU7SUFDMUIsWUFBc0IsT0FBeUIsRUFBWSxNQUFjO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN6RSxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsYUFBdUIsRUFBRSxPQUE2QjtRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUMxQixJQUFJLENBQUMsRUFBRTtvQkFDTCxjQUFjLENBQUMsVUFBVSxDQUFDLHNCQUFjLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO29CQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUNGLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVNLFlBQVk7UUFDakIsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBYyxDQUFDLENBQUM7UUFDekQsT0FBTyxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLFdBQVcsQ0FBQztJQUNwRixDQUFDO0lBRU0sZUFBZSxDQUFDLE9BQTZCO1FBQ2xELE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQWMsQ0FBQyxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxVQUFVLENBQUMsc0JBQWMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQy9DLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO0lBRUosQ0FBQztJQUVELDJIQUEySDtJQUNwSCxpQkFBaUIsQ0FBQyxJQUFVLEVBQUUsU0FBaUI7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVBLG9JQUFvSTtJQUM3SCxtQkFBbUIsQ0FBQyxJQUFVLEVBQUUsS0FBZTtRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFoREQsMENBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3NpTmdBdXRoU2VydmljZSB9IGZyb20gJy4uL3dzaS1uZy1hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbmV4cG9ydCBjb25zdCBSRVRVUk5fVVJMX0tFWSA9ICdyZXR1cm5VcmwnO1xuZXhwb3J0IGNsYXNzIFJlZGlyZWN0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBXc2lOZ0F1dGhTZXJ2aWNlLCBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIHB1YmxpYyByZWRpcmVjdE9yUmV0dXJuKHJlZGlyZWN0Um91dGU6IHN0cmluZ1tdLCBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhhc1JldHVyblVybCgpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmV0dXJuVXJsKGVycm9yID0+IGZhaWx1cmUoZXJyb3IpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5sb2FkVXNlclByb2ZpbGUoXG4gICAgICAgICAgbmV4dCA9PiB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFJFVFVSTl9VUkxfS0VZKTtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RVc2VyVG9Sb3V0ZShuZXh0LCByZWRpcmVjdFJvdXRlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzUmV0dXJuVXJsKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJldHVyblVybCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUkVUVVJOX1VSTF9LRVkpO1xuICAgIHJldHVybiByZXR1cm5VcmwgIT09IG51bGwgJiYgcmV0dXJuVXJsICE9PSB1bmRlZmluZWQgJiYgcmV0dXJuVXJsICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVSZXR1cm5VcmwoZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCByZXR1cm5VcmwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFJFVFVSTl9VUkxfS0VZKTtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFJFVFVSTl9VUkxfS0VZKTtcbiAgICB0aGlzLnNlcnZpY2UubG9hZFVzZXJQcm9maWxlKFxuICAgICAgbmV4dCA9PiB0aGlzLnJlZGlyZWN0VXNlclRvVXJsKG5leHQsIHJldHVyblVybCksXG4gICAgICBlcnJvciA9PiBmYWlsdXJlKGVycm9yKVxuICAgICk7XG5cbiAgfVxuXG4gIC8vIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNhdGNoIGEgdXNlciBiZWluZyByZWRpcmVjdGVkIHRvIGEgc3BlY2lmaWMgcmV0dXJuVXJsICh3aGVuIGEgdXNlciBwYXN0ZXMgYSBsaW5rIGluIHRoZSBicm93c2VyKVxuICBwdWJsaWMgcmVkaXJlY3RVc2VyVG9VcmwodXNlcjogVXNlciwgcmV0dXJuVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJldHVyblVybCk7XG4gIH1cblxuICAgLy8gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2F0Y2NoIGEgdXNlciBiZWluZyByZWRpcmVjdGVkIHRvIHRoZSBob21lcGFnZSByb3V0ZS4gdXNlZnVsIGlmIHlvdSBuZWVkIHRvIGxvYWQgdGhlIGhvbWVwYWdlIGZyb20gdGhlIERCXG4gICBwdWJsaWMgcmVkaXJlY3RVc2VyVG9Sb3V0ZSh1c2VyOiBVc2VyLCByb3V0ZTogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShyb3V0ZSk7XG4gIH1cbn1cbiJdfQ==