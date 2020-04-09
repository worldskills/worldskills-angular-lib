import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { UserModel } from '../models/user.model';

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

  constructor() {
    this.date = new Date();
    this.currentUser = new UserModel();
  }

  ngOnInit() {
  }

  login() {
    this.loginClick.emit();
  }

  logout() {
    this.logoutClick.emit();
  }

}
