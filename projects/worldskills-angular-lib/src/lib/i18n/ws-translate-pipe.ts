import { Pipe, PipeTransform } from "@angular/core";
import { WsiTranslateService } from "./wsi-translate.service";
import { map } from "rxjs/operators";
import { BehaviorSubject, of, Subject } from "rxjs";

@Pipe({
    name: "wsTranslate",
    standalone: false
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
    const flat = this.flatten(obj);

    const value = flat[key];
    if (value === null || value === undefined) {
      return this.wsiTranslate.translator.get(key);
    } else {
      return of(value);
    }
  }

  flatten(obj: any): any {
    if (obj === null || obj === undefined) {
      return null;
    }
    const result: any = {};
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object") {
        const flatObject = this.flatten(obj[key]);
        Object.keys(flatObject).forEach((flatKey) => {
          result[`${key}.${flatKey}`] = flatObject[flatKey];
        });
      } else {
        result[key] = obj[key];
      }
    });
    return result;
  }

}
