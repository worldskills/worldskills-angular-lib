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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RelativeDatePipe } from './common/pipes/relative-date.pipe';
import { MultiselectPollComponent } from './polls/multiselect-poll/multiselect-poll.component';
import { EntityTreeSelectComponent } from './entity-tree-select/components/entity-tree-select.component';
import { SelectDirective } from './select/directives/select.directive';
import { SelectAsyncHeaderComponent } from './select/components/select-async-header.component';
import { UserRoleDirective } from './common/directives/user-role.directive';
import { AuthHeaderComponent } from './headers/auth-header/auth-header.component';
import { AuthFooterComponent } from './footer/auth-footer/auth-footer.component';
import { FileThumbnailViewComponent } from './file/file-thumbnail-view/file-thumbnail-view.component';
import { FileSizePipe } from "./file/file-size.pipe";


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
    FileThumbnailViewComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgSelectModule
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
    FileThumbnailViewComponent
  ],
  providers: []
})
export class WorldskillsAngularLibModule { }
