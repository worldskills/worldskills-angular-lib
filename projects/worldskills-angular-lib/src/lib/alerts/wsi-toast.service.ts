import { Injectable, TemplateRef } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WsiToastService {
  constructor() {}

  toasts: any[] = [];

  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  showStandard(msg: string): void {
    this.show(msg, {
      delay: 2000,
      autohide: true,
    });
  }
  showSuccess(title: string, msg: string): void {
    this.show(msg, {
      classname: "bg-success text-light",
      delay: 2000,
      autohide: true,
      headertext: title,
    });
  }
  showError(title: string, msg: string): void {
    this.show(msg, {
      classname: "bg-danger text-light",
      delay: 2000,
      autohide: true,
      headertext: title,
    });
  }

  // uwse custom view template for toast
  showCustomToast(customTpl): void {
    this.show(customTpl, {
      classname: "bg-info text-light",
      delay: 3000,
      autohide: true,
    });
  }
}
