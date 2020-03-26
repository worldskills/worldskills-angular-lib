import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'ws-puppeteer-banner',
  templateUrl: './puppeteer-banner.component.html',
  styleUrls: ['./puppeteer-banner.component.css']
})
export class PuppeteerBannerComponent implements OnInit {

  @Input() currentUser: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
