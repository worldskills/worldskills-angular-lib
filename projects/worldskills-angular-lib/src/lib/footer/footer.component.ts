import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LanguageModel } from '../models/language.model';
import { GenericUtil } from '../util/generic-util';

@Component({
  selector: 'ws-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date;

  @Input() col1Template: TemplateRef<any>;
  @Input() col2Template: TemplateRef<any>;
  @Input() col3Template: TemplateRef<any>;
  @Input() col4Template: TemplateRef<any>;
  @Input() col5Template: TemplateRef<any>;
  @Input() col6Template: TemplateRef<any>;

  @Input() languages: LanguageModel[];
  @Input() selectedLanguage: LanguageModel;

  defaultLanguages: LanguageModel[];

  @ViewChild('#col1DefaultTemplate')
  col1DefaultTemplate: TemplateRef<any>;

  @ViewChild('#col6DefaultTemplate')
  col6DefaultTemplate: TemplateRef<any>;

  @ViewChild('#colDefaultTemplate')
  colDefaultTemplate: TemplateRef<any>;

  @Input() public isLoggedIn: boolean;
  @Input() currentUser: UserModel;
  @Output() public logoutClick: EventEmitter<any> = new EventEmitter();
  @Output() public loginClick: EventEmitter<any> = new EventEmitter();

  @Output() public languageChange: EventEmitter<LanguageModel> = new EventEmitter();

  constructor() {
    this.date = new Date();
    this.currentUser = new UserModel();
  }

  ngOnInit() {
    this.defaultLanguages = [];
    this.defaultLanguages.push(new LanguageModel('en', 'English'));
  }

  login() {
    this.loginClick.emit();
  }

  logout() {
    this.logoutClick.emit();
  }

  changeLanguage(model: LanguageModel) {
    this.selectedLanguage = model;
    this.languageChange.emit(model);
  }

  isLanguageSelected(model: LanguageModel) {
    if (GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
      return model.code === 'en';
    }

    return model.code === this.selectedLanguage.code;
  }
}
