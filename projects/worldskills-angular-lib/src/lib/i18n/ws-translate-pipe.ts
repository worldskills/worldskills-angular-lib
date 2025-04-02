import { Pipe, PipeTransform } from "@angular/core";
import { WsiTranslateService } from "./wsi-translate.service";
import { map } from "rxjs/operators";
import { BehaviorSubject, of, Subject } from "rxjs";

@Pipe({
  name: "wsTranslate",
})
export class WSTranslate implements PipeTransform {
  constructor(public wsiTranslate: WsiTranslateService) {}

  transform(key: string): any {
    let peices: string[] = [key];
    if (typeof key === "string") {
      peices = key.split(".");
    }

    const lang = this.wsiTranslate.getCurrentOrDefaultCode();
    this.wsiTranslate.init(lang);
    const obj = this.wsiTranslate.availableLanguages[lang];

    const value = this.getValue(obj, peices);
    if (value === null || value === undefined) {
      return this.wsiTranslate.translator.get(key);
    } else {
      return of(value);
    }
  }

  getValue(obj: any, key: string[]): any {
    console.log("getValue", obj, key);
    if (obj === null || obj === undefined) {
      return null;
    }
    if (key.length === 1) {
      const value = obj[key[0]];
      if (value === null || value === undefined) {
        return null;
      } else {
        return value;
      }
    } else {
      return this.getValue(obj[key[0]], key.slice(1));
    }
  }
}
