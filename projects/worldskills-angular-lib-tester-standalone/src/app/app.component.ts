import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangUtil, WorldskillsAngularLibModule, WorldskillsAngularLibService, WsiTranslateService } from 'worldskills-angular-lib';

@Component({
    selector: 'app-root',
    imports: [AsyncPipe, RouterOutlet, TranslateModule, WorldskillsAngularLibModule],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester-standalone';

  constructor(
    private wsi: WorldskillsAngularLibService,
    private wsiTranslator: WsiTranslateService
  ) {
    this.configureLib();
    this.wsiTranslator.onLangChanged.subscribe(code => {
      console.log('Language changed to: ', code);
    });
    // this.wsiTranslator.translator.setDefaultLang('en');  

    // console.log(this.wsiTranslator.availableLanguages['en']);


    this.wsiTranslator.translator.get('en').subscribe(
      (res: string) => {
        console.log('en', res);
      }
    );
  }

  configureLib(): void {
          this.wsi.appConfigSubject.next({
              notAuthorizedRoute: ['/not-authorized']
          });
  
          this.wsi.authConfigSubject.next({
              loginUrl: 'http://localhost:50300/oauth/authorize',
              clientId: '6321532f6771',
              redirectUri: 'http://localhost:4200/',
              userinfoEndpoint: `$http://localhost:8080/users/loggedIn?show_child_roles=false&app_code=500`,
              oidc: false
          });
  
          this.wsi.httpConfigSubject.next({
              encoderUriPatterns: [],
              authUriPatterns: ['api.worldskills.show', 'localhost:8080'],
              includeLanguageParam: true
          });
  
          this.wsi.serviceConfigSubject.next({
              appCode: [500],
              // apiEndpoint: 'https://api.worldskills.show',
              apiEndpoint: 'http://localhost:8080'
          });

      }
}
