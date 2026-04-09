import { HttpParameterCodec } from '@angular/common/http';

/** Encodes URL parameters using encodeURIComponent, correctly handling reserved characters like '+'. */
export class WsHttpEncoder implements HttpParameterCodec {
  encodeKey(key: string): string { return encodeURIComponent(key); }
  encodeValue(value: string): string { return encodeURIComponent(value); }
  decodeKey(key: string): string { return decodeURIComponent(key); }
  decodeValue(value: string): string { return decodeURIComponent(value); }
}
