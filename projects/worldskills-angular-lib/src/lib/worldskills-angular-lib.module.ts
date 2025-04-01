import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders, ModuleWithProviders, NgModule } from '@angular/core';
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
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { I18nTextComponent } from './i18n/i18n-text/i18n-text.component';
import { I18nTextboxComponent } from './i18n/i18n-textbox/i18n-textbox.component';
import { I18nTextareaComponent } from './i18n/i18n-textarea/i18n-textarea.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RelativeDateComponent } from './date/relative-date/relative-date.component';
import { ToastComponent } from './alerts/toast/toast.component';
import { ModalsComponent } from './modals/modals/modals.component';
import { RecipientAwardListComponent } from './awards/components/recipient-award-list/recipient-award-list.component';
import { RecipientAwardFormComponent } from './awards/components/recipient-award-form/recipient-award-form.component';
import { WsSpinnerComponent } from './ws-spinner/ws-spinner.component';
import { ModalComponent } from './awards/components/modal/modal.component';
import { PanelRowActionsComponent } from './awards/components/panel-row-actions/panel-row-actions.component';
import {
    RecipientAwardCertificateFormComponent
} from './awards/components/recipient-award-certificate-form/recipient-award-certificate-form.component';
import { WorldskillsAngularLibService } from './worldskills-angular-lib.service';
import { CommonModule } from '@angular/common';

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

@NgModule({ declarations: [
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
        I18nTextComponent,
        I18nTextboxComponent,
        I18nTextareaComponent,
        RelativeDateComponent,
        ToastComponent,
        ModalsComponent,
        RecipientAwardListComponent,
        RecipientAwardFormComponent,
        WsSpinnerComponent,
        ModalComponent,
        PanelRowActionsComponent,
        RecipientAwardCertificateFormComponent
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
        I18nTextComponent,
        I18nTextboxComponent,
        I18nTextareaComponent,
        RelativeDateComponent,
        ToastComponent,
        ModalsComponent,
        RecipientAwardListComponent,
        RecipientAwardFormComponent,
        WsSpinnerComponent,
        ModalComponent,
        PanelRowActionsComponent,
        RecipientAwardCertificateFormComponent
    ], imports: [CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        NgSelectModule,
        translateConfig], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class WorldskillsAngularLibModule {
    public static forRoot(environment: any): ModuleWithProviders<WorldskillsAngularLibModule> {
        return {
            ngModule: WorldskillsAngularLibModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
