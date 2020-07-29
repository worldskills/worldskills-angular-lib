"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const http_util_1 = require("../common/util/http.util");
const i0 = require("@angular/core");
const i1 = require("../worldskills-angular-lib.service");
const i2 = require("@angular/common/http");
const i3 = require("../common/services/upload.service");
class ResourceService {
    constructor(wsi, http, uploader) {
        this.wsi = wsi;
        this.http = http;
        this.uploader = uploader;
        this.wsi.serviceConfigSubject.subscribe(next => {
            this.url = next.apiEndpoint + '/resources';
        });
    }
    /*
      ResourceResource
    */
    // allow a client to user submit an object directly or use a managed object
    search(filter) {
        const params = http_util_1.HttpUtil.objectToParams(filter);
        return this.http.get(this.url, { params });
    }
    get(id) {
        const url = `${this.url}/${id}`;
        return this.http.get(url);
    }
    delete(id) {
        const url = `${this.url}/${id}`;
        return this.http.delete(url);
    }
    update(id, model) {
        const url = `${this.url}/${id}`;
        return this.http.put(url, model);
    }
    // this more or less saves the resource to the api
    // the client has control over weather it's a POST or a PUT
    upload(data, file, method = 'POST', id = 0) {
        const url = method === 'POST' ? this.url : `${this.url}/${id}`;
        const formData = new FormData();
        formData.append('key', 'value');
        formData.append('requestData', JSON.stringify(data));
        formData.append('file', file);
        return this.uploader.prepareUpload(url, formData, new http_1.HttpParams(), method);
    }
    /* /types
      ResourceTypeResource
    */
    listTypes() {
        const url = `${this.url}/types`;
        return this.http.get(url);
    }
    getType(id) {
        const url = `${this.url}/types/${id}`;
        return this.http.get(url);
    }
    /* /metadata
      MetadataResource
    */
    listMetadata() {
        const url = `${this.url}/metadata`;
        return this.http.get(url);
    }
    getMetadata(id) {
        const url = `${this.url}/metadata/${id}`;
        return this.http.get(url);
    }
    createMetadata(model) {
        const url = `${this.url}/metadata`;
        return this.http.post(url, model);
    }
    updateMetadata(id, model) {
        const url = `${this.url}/metadata/${id}`;
        return this.http.put(url, model);
    }
    deleteMetadata(id) {
        const url = `${this.url}/metadata/${id}`;
        return this.http.delete(url);
    }
}
exports.ResourceService = ResourceService;
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(i0.ɵɵinject(i1.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.UploadService)); };
ResourceService.ɵprov = i0.ɵɵdefineInjectable({ token: ResourceService, factory: ResourceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResourceService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.WorldskillsAngularLibService }, { type: i2.HttpClient }, { type: i3.UploadService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvcmVzb3VyY2VzL3Jlc291cmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTJDO0FBRTNDLCtDQUEyRTtBQUkzRSx3REFBb0Q7Ozs7O0FBT3BELE1BR2EsZUFBZTtJQUcxQixZQUFvQixHQUFpQyxFQUFVLElBQWdCLEVBQVMsUUFBdUI7UUFBM0YsUUFBRyxHQUFILEdBQUcsQ0FBOEI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUM3RyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FDckMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1FBQzdDLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztNQUVFO0lBRUYsMkVBQTJFO0lBQ3BFLE1BQU0sQ0FBQyxNQUFzQjtRQUNsQyxNQUFNLE1BQU0sR0FBRyxvQkFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFDbkIsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFVO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLEdB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QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7O0FBM0ZILDBDQTRGQzs4RUF6RlksZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO2tEQUVQLGVBQWU7Y0FIM0IsaUJBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdvcmxkc2tpbGxzQW5ndWxhckxpYlNlcnZpY2UgfSBmcm9tICcuLi93b3JsZHNraWxscy1hbmd1bGFyLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy91cGxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vbW9kZWxzL3Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlU2VhcmNoIH0gZnJvbSAnLi9tb2RlbHMvcmVzb3VyY2Utc2VhcmNoJztcbmltcG9ydCB7IEh0dHBVdGlsIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwvaHR0cC51dGlsJztcbmltcG9ydCB7IFJlc291cmNlVHlwZSB9IGZyb20gJy4vbW9kZWxzL3Jlc291cmNlLXR5cGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzb3VyY2VNZXRhZGF0YUluZm8gfSBmcm9tICcuL21vZGVscy9yZXNvdXJjZS1tZXRhZGF0YS1pbmZvJztcbmltcG9ydCB7IFJlc291cmNlQ29udGFpbmVyIH0gZnJvbSAnLi9tb2RlbHMvcmVzb3VyY2UtY29udGFpbmVyJztcbmltcG9ydCB7IFJlc291cmNlVXBsb2FkIH0gZnJvbSAnLi9tb2RlbHMvcmVzb3VyY2VjLXVwbG9hZCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlU2VydmljZSB7XG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3c2k6IFdvcmxkc2tpbGxzQW5ndWxhckxpYlNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHVwbG9hZGVyOiBVcGxvYWRTZXJ2aWNlKSB7XG4gICAgdGhpcy53c2kuc2VydmljZUNvbmZpZ1N1YmplY3Quc3Vic2NyaWJlKFxuICAgICAgbmV4dCA9PiB7XG4gICAgICAgIHRoaXMudXJsID0gbmV4dC5hcGlFbmRwb2ludCArICcvcmVzb3VyY2VzJztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLypcbiAgICBSZXNvdXJjZVJlc291cmNlXG4gICovXG5cbiAgLy8gYWxsb3cgYSBjbGllbnQgdG8gdXNlciBzdWJtaXQgYW4gb2JqZWN0IGRpcmVjdGx5IG9yIHVzZSBhIG1hbmFnZWQgb2JqZWN0XG4gIHB1YmxpYyBzZWFyY2goZmlsdGVyOiBSZXNvdXJjZVNlYXJjaCk6IE9ic2VydmFibGU8UmVzb3VyY2VDb250YWluZXI+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBIdHRwVXRpbC5vYmplY3RUb1BhcmFtcyhmaWx0ZXIpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlc291cmNlQ29udGFpbmVyPih0aGlzLnVybCwgeyBwYXJhbXMgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJlc291cmNlPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZXNvdXJjZT4odXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShpZDogbnVtYmVyLCBtb2RlbDogUmVzb3VyY2VVcGxvYWQpOiBPYnNlcnZhYmxlPFJlc291cmNlPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSZXNvdXJjZT4odXJsLCBtb2RlbCk7XG4gIH1cblxuICAvLyB0aGlzIG1vcmUgb3IgbGVzcyBzYXZlcyB0aGUgcmVzb3VyY2UgdG8gdGhlIGFwaVxuICAvLyB0aGUgY2xpZW50IGhhcyBjb250cm9sIG92ZXIgd2VhdGhlciBpdCdzIGEgUE9TVCBvciBhIFBVVFxuICBwdWJsaWMgdXBsb2FkKGRhdGE6IFJlc291cmNlVXBsb2FkLCBmaWxlOiBhbnksIG1ldGhvZCA9ICdQT1NUJywgaWQgPSAwKTogSHR0cFJlcXVlc3Q8Rm9ybURhdGE+IHtcbiAgICBjb25zdCB1cmwgPSBtZXRob2QgPT09ICdQT1NUJyA/IHRoaXMudXJsIDogYCR7dGhpcy51cmx9LyR7aWR9YDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgna2V5JywgJ3ZhbHVlJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXF1ZXN0RGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcblxuICAgIHJldHVybiB0aGlzLnVwbG9hZGVyLnByZXBhcmVVcGxvYWQodXJsLCBmb3JtRGF0YSwgbmV3IEh0dHBQYXJhbXMoKSwgbWV0aG9kKTtcbiAgfVxuXG4gIC8qIC90eXBlc1xuICAgIFJlc291cmNlVHlwZVJlc291cmNlXG4gICovXG5cbiAgcHVibGljIGxpc3RUeXBlcygpOiBPYnNlcnZhYmxlPFJlc291cmNlVHlwZVtdPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9L3R5cGVzYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZXNvdXJjZVR5cGVbXT4odXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUeXBlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJlc291cmNlVHlwZT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS90eXBlcy8ke2lkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UmVzb3VyY2VUeXBlPih1cmwpO1xuICB9XG5cbiAgLyogL21ldGFkYXRhXG4gICAgTWV0YWRhdGFSZXNvdXJjZVxuICAqL1xuICBwdWJsaWMgbGlzdE1ldGFkYXRhKCk6IE9ic2VydmFibGU8UmVzb3VyY2VNZXRhZGF0YUluZm9bXT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS9tZXRhZGF0YWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UmVzb3VyY2VNZXRhZGF0YUluZm9bXT4odXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXRhZGF0YShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXNvdXJjZU1ldGFkYXRhSW5mbz4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS9tZXRhZGF0YS8ke2lkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UmVzb3VyY2VNZXRhZGF0YUluZm8+KHVybCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTWV0YWRhdGEobW9kZWw6IFJlc291cmNlTWV0YWRhdGFJbmZvKTogT2JzZXJ2YWJsZTxSZXNvdXJjZU1ldGFkYXRhSW5mbz4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS9tZXRhZGF0YWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFJlc291cmNlTWV0YWRhdGFJbmZvPih1cmwsIG1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVNZXRhZGF0YShpZDogbnVtYmVyLCBtb2RlbDogUmVzb3VyY2VNZXRhZGF0YUluZm8pOiBPYnNlcnZhYmxlPFJlc291cmNlTWV0YWRhdGFJbmZvPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9L21ldGFkYXRhLyR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSZXNvdXJjZU1ldGFkYXRhSW5mbz4odXJsLCBtb2RlbCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlTWV0YWRhdGEoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9L21ldGFkYXRhLyR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpO1xuICB9XG59XG4iXX0=