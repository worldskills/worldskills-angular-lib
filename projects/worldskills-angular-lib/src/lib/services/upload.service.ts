import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest, HttpProgressEvent, HttpResponse, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  public prepareUpload(url: string, data: FormData, params: HttpParams, method = 'POST'): HttpRequest<FormData> {
    const options = {
      params,
      reportProgress: true,
    };

    return new HttpRequest(method, url, data, options);
  }

  // Full list of events: https://angular.io/api/common/http/HttpEventType
  // event specific classes: https://angular.io/api/common/http/HttpEvent#description
  public listen<T>(
    request: HttpRequest<FormData>,
    progress: (progress: HttpProgressEvent) => void,
    complete: (response: HttpResponse<T>) => void) {

    this.http.request(request).subscribe((event: HttpEvent<T>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          progress(event as HttpProgressEvent);
          break;
        case HttpEventType.Response:
          complete(event as HttpResponse<T>);
          break;
      }
    });
  }
}
