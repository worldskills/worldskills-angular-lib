import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WsHttpInterceptor } from '../../../worldskills-angular-lib/src/lib/interceptors/ws-http.interceptor';
import { AnotherPageComponent } from './another-page/another-page.component';
import { AnotherRouteComponent } from './another-route/another-route.component';
import { NestedPageComponent } from './nested-page/nested-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GuardService } from '../../../worldskills-angular-lib/src/lib/auth/guard.service';
import { SubpageOneComponent } from './subpage-one/subpage-one.component';
import { SubpageTwoComponent } from './subpage-two/subpage-two.component';


const routerOptions: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    // ...any other options you'd like to use
};


const appRoutes: Routes = [
    // /home
    {
        path: 'home', component: HomeComponent, children: [
            {
                path: 'nested', component: NestedPageComponent,
                // canActivate: [GuardService],
                data: {
                    breadcrumb: {key: 'nested', label: 'Nested'}
                }
            },
            {
                path: 'submenu1', component: SubpageOneComponent,
                // canActivate: [GuardService],
                data: {
                    breadcrumb: {key: 'submenu1', label: 'submenu1'}
                }
            },
            {
                path: 'submenu2', component: SubpageTwoComponent,
                // canActivate: [GuardService],
                data: {
                    breadcrumb: {key: 'submenu2', label: 'submenu2'}
                }
            },
        ]
    },

    {
        path: 'another', component: AnotherPageComponent,
        data: {
            breadcrumb: {key: 'another', label: 'Another'}
        }
    },

    {
        path: 'authorized', component: AnotherPageComponent, canActivate: [GuardService], data: {
            roles: [{appCode: 100, name: 'non-existing'}]
        }
    },

    {
        path: 'nest', component: AnotherRouteComponent,
        data: {
            breadcrumb: {key: 'nest', label: 'Nest'}
        },
        children: [
            {
                path: '', component: AnotherPageComponent,
                data: {}
            },
            {
                path: 'nested', component: NestedPageComponent,
                // canActivate: [GuardService],
                data: {
                    breadcrumb: {key: 'nested', label: 'Nested'}
                }
            },
        ]
    },
    {path: 'not-authorized', component: AnotherPageComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'},

];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AnotherPageComponent,
        AnotherRouteComponent,
        NestedPageComponent,
        SubpageOneComponent,
        SubpageTwoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        RouterModule.forRoot(appRoutes, routerOptions),
        WorldskillsAngularLibModule,
        NgbModule,
        NgSelectModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true},
    ], bootstrap: [AppComponent]
})
export class AppModule {
}
