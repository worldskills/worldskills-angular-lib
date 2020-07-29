"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldskillsAngularLibModule = void 0;
const core_1 = require("@angular/core");
const worldskills_angular_lib_component_1 = require("./worldskills-angular-lib.component");
const alert_component_1 = require("./alerts/alert/alert.component");
const alerts_component_1 = require("./alerts/alerts/alerts.component");
const platform_browser_1 = require("@angular/platform-browser");
const angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
const puppeteer_banner_component_1 = require("./banners/puppeteer-banner/puppeteer-banner.component");
const staging_banner_component_1 = require("./banners/staging-banner/staging-banner.component");
const breadcrumbs_component_1 = require("./breadcrumbs/breadcrumbs/breadcrumbs.component");
const header_component_1 = require("./headers/header/header.component");
const logo_component_1 = require("./logos/logo/logo.component");
const wordmark_component_1 = require("./logos/wordmark/wordmark.component");
const menu_access_pipe_1 = require("./headers/menu-access.pipe");
const footer_component_1 = require("./footer/footer/footer.component");
const date_range_component_1 = require("./date/date-range/date-range.component");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const datetime_picker_component_1 = require("./date/datetime-picker/datetime-picker.component");
const forms_1 = require("@angular/forms");
const date_sort_pipe_1 = require("./common/pipes/date-sort.pipe");
const poll_result_component_1 = require("./polls/poll-result/poll-result.component");
const standard_poll_component_1 = require("./polls/standard-poll/standard-poll.component");
const weighted_poll_component_1 = require("./polls/weighted-poll/weighted-poll.component");
const vote_control_component_1 = require("./polls/vote-control/vote-control.component");
const ng_select_1 = require("@ng-select/ng-select");
const entity_tree_select_component_1 = require("./entity-tree/entity-tree-select/entity-tree-select.component");
const i0 = require("@angular/core");
const i1 = require("angular-oauth2-oidc");
class WorldskillsAngularLibModule {
}
exports.WorldskillsAngularLibModule = WorldskillsAngularLibModule;
WorldskillsAngularLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: WorldskillsAngularLibModule });
WorldskillsAngularLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function WorldskillsAngularLibModule_Factory(t) { return new (t || WorldskillsAngularLibModule)(); }, imports: [[
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            angular_oauth2_oidc_1.OAuthModule.forRoot(),
            ng_bootstrap_1.NgbModule,
            ng_select_1.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WorldskillsAngularLibModule, { declarations: [worldskills_angular_lib_component_1.WorldskillsAngularLibComponent,
        alert_component_1.AlertComponent,
        alerts_component_1.AlertsComponent,
        breadcrumbs_component_1.BreadcrumbsComponent,
        date_range_component_1.DateRangeComponent,
        datetime_picker_component_1.DatetimePickerComponent,
        entity_tree_select_component_1.EntityTreeSelectComponent,
        footer_component_1.FooterComponent,
        header_component_1.HeaderComponent,
        logo_component_1.LogoComponent,
        menu_access_pipe_1.MenuAccessPipe,
        poll_result_component_1.PollResultComponent,
        puppeteer_banner_component_1.PuppeteerBannerComponent,
        date_sort_pipe_1.SortPipe,
        staging_banner_component_1.StagingBannerComponent,
        standard_poll_component_1.StandardPollComponent,
        vote_control_component_1.VoteControlComponent,
        wordmark_component_1.WordmarkComponent,
        weighted_poll_component_1.WeightedPollComponent], imports: [platform_browser_1.BrowserModule,
        forms_1.FormsModule, i1.OAuthModule, ng_bootstrap_1.NgbModule,
        ng_select_1.NgSelectModule], exports: [worldskills_angular_lib_component_1.WorldskillsAngularLibComponent,
        alert_component_1.AlertComponent,
        alerts_component_1.AlertsComponent,
        breadcrumbs_component_1.BreadcrumbsComponent,
        date_range_component_1.DateRangeComponent,
        datetime_picker_component_1.DatetimePickerComponent,
        entity_tree_select_component_1.EntityTreeSelectComponent,
        footer_component_1.FooterComponent,
        header_component_1.HeaderComponent,
        logo_component_1.LogoComponent,
        menu_access_pipe_1.MenuAccessPipe,
        poll_result_component_1.PollResultComponent,
        puppeteer_banner_component_1.PuppeteerBannerComponent,
        date_sort_pipe_1.SortPipe,
        staging_banner_component_1.StagingBannerComponent,
        standard_poll_component_1.StandardPollComponent,
        vote_control_component_1.VoteControlComponent,
        wordmark_component_1.WordmarkComponent,
        weighted_poll_component_1.WeightedPollComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorldskillsAngularLibModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    worldskills_angular_lib_component_1.WorldskillsAngularLibComponent,
                    alert_component_1.AlertComponent,
                    alerts_component_1.AlertsComponent,
                    breadcrumbs_component_1.BreadcrumbsComponent,
                    date_range_component_1.DateRangeComponent,
                    datetime_picker_component_1.DatetimePickerComponent,
                    entity_tree_select_component_1.EntityTreeSelectComponent,
                    footer_component_1.FooterComponent,
                    header_component_1.HeaderComponent,
                    logo_component_1.LogoComponent,
                    menu_access_pipe_1.MenuAccessPipe,
                    poll_result_component_1.PollResultComponent,
                    puppeteer_banner_component_1.PuppeteerBannerComponent,
                    date_sort_pipe_1.SortPipe,
                    staging_banner_component_1.StagingBannerComponent,
                    standard_poll_component_1.StandardPollComponent,
                    vote_control_component_1.VoteControlComponent,
                    wordmark_component_1.WordmarkComponent,
                    weighted_poll_component_1.WeightedPollComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    forms_1.FormsModule,
                    angular_oauth2_oidc_1.OAuthModule.forRoot(),
                    ng_bootstrap_1.NgbModule,
                    ng_select_1.NgSelectModule
                ],
                exports: [
                    worldskills_angular_lib_component_1.WorldskillsAngularLibComponent,
                    alert_component_1.AlertComponent,
                    alerts_component_1.AlertsComponent,
                    breadcrumbs_component_1.BreadcrumbsComponent,
                    date_range_component_1.DateRangeComponent,
                    datetime_picker_component_1.DatetimePickerComponent,
                    entity_tree_select_component_1.EntityTreeSelectComponent,
                    footer_component_1.FooterComponent,
                    header_component_1.HeaderComponent,
                    logo_component_1.LogoComponent,
                    menu_access_pipe_1.MenuAccessPipe,
                    poll_result_component_1.PollResultComponent,
                    puppeteer_banner_component_1.PuppeteerBannerComponent,
                    date_sort_pipe_1.SortPipe,
                    staging_banner_component_1.StagingBannerComponent,
                    standard_poll_component_1.StandardPollComponent,
                    vote_control_component_1.VoteControlComponent,
                    wordmark_component_1.WordmarkComponent,
                    weighted_poll_component_1.WeightedPollComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGRza2lsbHMtYW5ndWxhci1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi93b3JsZHNraWxscy1hbmd1bGFyLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXlDO0FBQ3pDLDJGQUFxRjtBQUNyRixvRUFBZ0U7QUFDaEUsdUVBQW1FO0FBQ25FLGdFQUEwRDtBQUMxRCw2REFBa0Q7QUFDbEQsc0dBQWlHO0FBQ2pHLGdHQUEyRjtBQUMzRiwyRkFBdUY7QUFDdkYsd0VBQW9FO0FBQ3BFLGdFQUE0RDtBQUM1RCw0RUFBd0U7QUFDeEUsaUVBQTREO0FBQzVELHVFQUFtRTtBQUNuRSxpRkFBNEU7QUFDNUUsNkRBQXVEO0FBQ3ZELGdHQUEyRjtBQUMzRiwwQ0FBNkM7QUFDN0Msa0VBQXlEO0FBQ3pELHFGQUFnRjtBQUNoRiwyRkFBc0Y7QUFDdEYsMkZBQXNGO0FBQ3RGLHdGQUFtRjtBQUNuRixvREFBc0Q7QUFDdEQsZ0hBQTBHOzs7QUFHMUcsTUFtRGEsMkJBQTJCOztBQW5EeEMsa0VBbUQ0QzsrREFBL0IsMkJBQTJCO3FJQUEzQiwyQkFBMkIsa0JBN0I3QjtZQUNQLGdDQUFhO1lBQ2IsbUJBQVc7WUFDWCxpQ0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQix3QkFBUztZQUNULDBCQUFjO1NBQ2Y7d0ZBdUJVLDJCQUEyQixtQkFqRHBDLGtFQUE4QjtRQUM5QixnQ0FBYztRQUNkLGtDQUFlO1FBQ2YsNENBQW9CO1FBQ3BCLHlDQUFrQjtRQUNsQixtREFBdUI7UUFDdkIsd0RBQXlCO1FBQ3pCLGtDQUFlO1FBQ2Ysa0NBQWU7UUFDZiw4QkFBYTtRQUNiLGlDQUFjO1FBQ2QsMkNBQW1CO1FBQ25CLHFEQUF3QjtRQUN4Qix5QkFBUTtRQUNSLGlEQUFzQjtRQUN0QiwrQ0FBcUI7UUFDckIsNkNBQW9CO1FBQ3BCLHNDQUFpQjtRQUNqQiwrQ0FBcUIsYUFHckIsZ0NBQWE7UUFDYixtQkFBVyxrQkFFWCx3QkFBUztRQUNULDBCQUFjLGFBR2Qsa0VBQThCO1FBQzlCLGdDQUFjO1FBQ2Qsa0NBQWU7UUFDZiw0Q0FBb0I7UUFDcEIseUNBQWtCO1FBQ2xCLG1EQUF1QjtRQUN2Qix3REFBeUI7UUFDekIsa0NBQWU7UUFDZixrQ0FBZTtRQUNmLDhCQUFhO1FBQ2IsaUNBQWM7UUFDZCwyQ0FBbUI7UUFDbkIscURBQXdCO1FBQ3hCLHlCQUFRO1FBQ1IsaURBQXNCO1FBQ3RCLCtDQUFxQjtRQUNyQiw2Q0FBb0I7UUFDcEIsc0NBQWlCO1FBQ2pCLCtDQUFxQjtrREFHWiwyQkFBMkI7Y0FuRHZDLGVBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osa0VBQThCO29CQUM5QixnQ0FBYztvQkFDZCxrQ0FBZTtvQkFDZiw0Q0FBb0I7b0JBQ3BCLHlDQUFrQjtvQkFDbEIsbURBQXVCO29CQUN2Qix3REFBeUI7b0JBQ3pCLGtDQUFlO29CQUNmLGtDQUFlO29CQUNmLDhCQUFhO29CQUNiLGlDQUFjO29CQUNkLDJDQUFtQjtvQkFDbkIscURBQXdCO29CQUN4Qix5QkFBUTtvQkFDUixpREFBc0I7b0JBQ3RCLCtDQUFxQjtvQkFDckIsNkNBQW9CO29CQUNwQixzQ0FBaUI7b0JBQ2pCLCtDQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdDQUFhO29CQUNiLG1CQUFXO29CQUNYLGlDQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQix3QkFBUztvQkFDVCwwQkFBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0VBQThCO29CQUM5QixnQ0FBYztvQkFDZCxrQ0FBZTtvQkFDZiw0Q0FBb0I7b0JBQ3BCLHlDQUFrQjtvQkFDbEIsbURBQXVCO29CQUN2Qix3REFBeUI7b0JBQ3pCLGtDQUFlO29CQUNmLGtDQUFlO29CQUNmLDhCQUFhO29CQUNiLGlDQUFjO29CQUNkLDJDQUFtQjtvQkFDbkIscURBQXdCO29CQUN4Qix5QkFBUTtvQkFDUixpREFBc0I7b0JBQ3RCLCtDQUFxQjtvQkFDckIsNkNBQW9CO29CQUNwQixzQ0FBaUI7b0JBQ2pCLCtDQUFxQjtpQkFDdEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXb3JsZHNraWxsc0FuZ3VsYXJMaWJDb21wb25lbnQgfSBmcm9tICcuL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydHNDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0cy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPQXV0aE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xuaW1wb3J0IHsgUHVwcGV0ZWVyQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXJzL3B1cHBldGVlci1iYW5uZXIvcHVwcGV0ZWVyLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhZ2luZ0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVycy9zdGFnaW5nLWJhbm5lci9zdGFnaW5nLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlcnMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nb3MvbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3JkbWFya0NvbXBvbmVudCB9IGZyb20gJy4vbG9nb3Mvd29yZG1hcmsvd29yZG1hcmsuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVBY2Nlc3NQaXBlIH0gZnJvbSAnLi9oZWFkZXJzL21lbnUtYWNjZXNzLnBpcGUnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlL2RhdGUtcmFuZ2UvZGF0ZS1yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRGF0ZXRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUvZGF0ZXRpbWUtcGlja2VyL2RhdGV0aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vY29tbW9uL3BpcGVzL2RhdGUtc29ydC5waXBlJztcbmltcG9ydCB7IFBvbGxSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL3BvbGxzL3BvbGwtcmVzdWx0L3BvbGwtcmVzdWx0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFuZGFyZFBvbGxDb21wb25lbnQgfSBmcm9tICcuL3BvbGxzL3N0YW5kYXJkLXBvbGwvc3RhbmRhcmQtcG9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VpZ2h0ZWRQb2xsQ29tcG9uZW50IH0gZnJvbSAnLi9wb2xscy93ZWlnaHRlZC1wb2xsL3dlaWdodGVkLXBvbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFZvdGVDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9wb2xscy92b3RlLWNvbnRyb2wvdm90ZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IEVudGl0eVRyZWVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2VudGl0eS10cmVlL2VudGl0eS10cmVlLXNlbGVjdC9lbnRpdHktdHJlZS1zZWxlY3QuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBXb3JsZHNraWxsc0FuZ3VsYXJMaWJDb21wb25lbnQsXG4gICAgQWxlcnRDb21wb25lbnQsXG4gICAgQWxlcnRzQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIERhdGVSYW5nZUNvbXBvbmVudCxcbiAgICBEYXRldGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBFbnRpdHlUcmVlU2VsZWN0Q29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgTG9nb0NvbXBvbmVudCxcbiAgICBNZW51QWNjZXNzUGlwZSxcbiAgICBQb2xsUmVzdWx0Q29tcG9uZW50LFxuICAgIFB1cHBldGVlckJhbm5lckNvbXBvbmVudCxcbiAgICBTb3J0UGlwZSxcbiAgICBTdGFnaW5nQmFubmVyQ29tcG9uZW50LFxuICAgIFN0YW5kYXJkUG9sbENvbXBvbmVudCxcbiAgICBWb3RlQ29udHJvbENvbXBvbmVudCxcbiAgICBXb3JkbWFya0NvbXBvbmVudCxcbiAgICBXZWlnaHRlZFBvbGxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgT0F1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5nYk1vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV29ybGRza2lsbHNBbmd1bGFyTGliQ29tcG9uZW50LFxuICAgIEFsZXJ0Q29tcG9uZW50LFxuICAgIEFsZXJ0c0NvbXBvbmVudCxcbiAgICBCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBEYXRlUmFuZ2VDb21wb25lbnQsXG4gICAgRGF0ZXRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgRW50aXR5VHJlZVNlbGVjdENvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgTWVudUFjY2Vzc1BpcGUsXG4gICAgUG9sbFJlc3VsdENvbXBvbmVudCxcbiAgICBQdXBwZXRlZXJCYW5uZXJDb21wb25lbnQsXG4gICAgU29ydFBpcGUsXG4gICAgU3RhZ2luZ0Jhbm5lckNvbXBvbmVudCxcbiAgICBTdGFuZGFyZFBvbGxDb21wb25lbnQsXG4gICAgVm90ZUNvbnRyb2xDb21wb25lbnQsXG4gICAgV29yZG1hcmtDb21wb25lbnQsXG4gICAgV2VpZ2h0ZWRQb2xsQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV29ybGRza2lsbHNBbmd1bGFyTGliTW9kdWxlIHsgfVxuIl19