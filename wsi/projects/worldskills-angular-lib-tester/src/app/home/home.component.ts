import { Component, OnInit } from '@angular/core';
import { WorldskillsAngularLibService } from '../../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { WsiNgAuthService } from '../../../../worldskills-angular-lib/src/lib/auth/wsi-ng-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private wsi: WorldskillsAngularLibService) { }

  ngOnInit(): void {

  }

}