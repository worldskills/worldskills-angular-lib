import { HttpClient, HttpParams, HttpRequest, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class UploadService {
    private http;
    constructor(http: HttpClient);
    prepareUpload(url: string, data: FormData, params: HttpParams, method?: string): HttpRequest<FormData>;
    listen<T>(request: HttpRequest<FormData>, progress: (progress: HttpProgressEvent) => void, complete: (response: HttpResponse<T>) => void): void;
    static ɵfac: i0.ɵɵFactoryDef<UploadService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UploadService>;
}
