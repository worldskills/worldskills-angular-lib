import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest, HttpProgressEvent, HttpResponse, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

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

  /**
   * Returns the Subscription so the caller can unsubscribe if needed.
   */
  public listen<T>(
    request: HttpRequest<FormData>,
    onProgress: (progress: HttpProgressEvent) => void,
    onComplete: (response: HttpResponse<T>) => void,
    onError?: (error: HttpErrorResponse) => void,
  ): Subscription {

    return this.http.request(request).subscribe({
      next: (event: HttpEvent<T>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            onProgress(event as HttpProgressEvent);
            break;
          case HttpEventType.Response:
            onComplete(event as HttpResponse<T>);
            break;
        }
      },
      error: (error: HttpErrorResponse) => {
        if (onError) {
          onError(error);
        }
      }
    });
  }
}
