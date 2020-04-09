import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'ws-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date;

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
