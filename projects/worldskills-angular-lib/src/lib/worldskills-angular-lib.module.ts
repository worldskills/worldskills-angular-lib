import { NgModule } from '@angular/core';
import { WorldskillsAngularLibComponent } from './worldskills-angular-lib.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';
import { BrowserModule } from '@angular/platform-browser';
import { PuppeteerBannerComponent } from './banners/puppeteer-banner/puppeteer-banner.component';
import { StagingBannerComponent } from './banners/staging-banner/staging-banner.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './headers/header/header.component';
import { LogoComponent } from './logos/logo/logo.component';
import { WordmarkComponent } from './logos/wordmark/wordmark.component';
import { MenuAccessPipe } from './headers/menu-access.pipe';
import { FooterComponent } from './footer/footer/footer.component';
import { DateRangeComponent } from './date/date-range/date-range.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatetimePickerComponent } from './date/datetime-picker/datetime-picker.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './common/pipes/date-sort.pipe';
import { PollResultComponent } from './polls/poll-result/poll-result.component';
import { StandardPollComponent } from './polls/standard-poll/standard-poll.component';
import { WeightedPollComponent } from './polls/weighted-poll/weighted-poll.component';
import { VoteControlComponent } from './polls/vote-control/vote-control.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RelativeDatePipe } from './common/pipes/relative-date.pipe';
import { MultiselectPollComponent } from './polls/multiselect-poll/multiselect-poll.component';
import { EntityTreeSelectComponent } from './entity-tree-select/components/entity-tree-select.component';
import { SelectDirective } from './select/directives/select.directive';
import { SelectAsyncHeaderComponent } from './select/components/select-async-header.component';
import { UserRoleDirective } from './common/directives/user-role.directive';
import { AuthHeaderComponent } from './headers/auth-header/auth-header.component';
import { AuthFooterComponent } from './footer/auth-footer/auth-footer.component';
import { ResourceThumbnailComponent } from './file/resource-thumbnail/resource-thumbnail.component';
import { FileSizePipe } from './file/file-size.pipe';
import { ResourceThumbnailContainerComponent } from './file/resource-thumbnail-container/resource-thumbnail-container.component';
import { I18nTextboxComponent } from './i18n/i18n-textbox/i18n-textbox.component';
import { I18nTextareaComponent } from './i18n/i18n-textarea/i18n-textarea.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RelativeDateComponent } from './date/relative-date/relative-date.component';
import { ToastComponent } from './alerts/toast/toast.component';
import { ModalsComponent } from './modals/modals/modals.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, '/assets/i18n/lazy-loaded/', '.json');
}

export const translateConfig = TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate: true
});

@NgModule({
    declarations: [
        WorldskillsAngularLibComponent,
        AlertComponent,
        AlertsComponent,
        BreadcrumbsComponent,
        DateRangeComponent,
        DatetimePickerComponent,
        EntityTreeSelectComponent,
        FooterComponent,
        HeaderComponent,
        LogoComponent,
        MenuAccessPipe,
        PollResultComponent,
        PuppeteerBannerComponent,
        RelativeDatePipe,
        SelectDirective,
        SelectAsyncHeaderComponent,
        SortPipe,
        StagingBannerComponent,
        StandardPollComponent,
        VoteControlComponent,
        WordmarkComponent,
        WeightedPollComponent,
        MultiselectPollComponent,
        UserRoleDirective,
        AuthHeaderComponent,
        AuthFooterComponent,
        ResourceThumbnailComponent,
        FileSizePipe,
        ResourceThumbnailContainerComponent,
        I18nTextboxComponent,
        I18nTextareaComponent,
        RelativeDateComponent,
        ToastComponent,
        ModalsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgbModule,
        NgSelectModule,
        translateConfig
    ],
    exports: [
        WorldskillsAngularLibComponent,
        AlertComponent,
        AlertsComponent,
        BreadcrumbsComponent,
        DateRangeComponent,
        DatetimePickerComponent,
        EntityTreeSelectComponent,
        FooterComponent,
        HeaderComponent,
        AuthHeaderComponent,
        AuthFooterComponent,
        LogoComponent,
        MenuAccessPipe,
        PollResultComponent,
        PuppeteerBannerComponent,
        RelativeDatePipe,
        SelectDirective,
        SelectAsyncHeaderComponent,
        SortPipe,
        StagingBannerComponent,
        StandardPollComponent,
        MultiselectPollComponent,
        VoteControlComponent,
        WordmarkComponent,
        WeightedPollComponent,
        UserRoleDirective,
        ResourceThumbnailComponent,
        ResourceThumbnailContainerComponent,
        I18nTextboxComponent,
        I18nTextareaComponent,
        RelativeDateComponent,
        ToastComponent,
        ModalsComponent,
    ],
    providers: []
})
export class WorldskillsAngularLibModule {
}
