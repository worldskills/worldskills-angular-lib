"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteControlComponent = void 0;
const core_1 = require("@angular/core");
const generic_util_1 = require("../../common/util/generic.util");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("../standard-poll/standard-poll.component");
const i3 = require("../weighted-poll/weighted-poll.component");
const i4 = require("../poll-result/poll-result.component");
function VoteControlComponent_ng_template_0_Template(rf, ctx) { }
function VoteControlComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.poll.title.text, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Created By: ", ctx_r3.poll.createdBy.firstName, " ", ctx_r3.poll.createdBy.lastName, "");
} }
function VoteControlComponent_ng_template_4_small_5_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Starts:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_ng_template_4_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Started:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, VoteControlComponent_ng_template_4_small_5_small_3_Template, 3, 0, "small", 6);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r9.state == "Not yet started");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 2, ctx_r9.poll.start, "EEEE, MMMM d, y, HH:mm zzzz"), "");
} }
function VoteControlComponent_ng_template_4_small_7_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Finished:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_ng_template_4_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Finishes:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, VoteControlComponent_ng_template_4_small_7_small_3_Template, 3, 0, "small", 6);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r10.state == "expired");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 2, ctx_r10.poll.expiry, "EEEE, MMMM d, y, HH:mm zzzz"), "");
} }
function VoteControlComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Status:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "\u00A0|\u00A0 ");
    i0.ɵɵtemplate(5, VoteControlComponent_ng_template_4_small_5_Template, 6, 5, "small", 6);
    i0.ɵɵtext(6, "\u00A0 ");
    i0.ɵɵtemplate(7, VoteControlComponent_ng_template_4_small_7_Template, 6, 5, "small", 6);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.state, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.state != "Not yet started");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.state != "expired");
} }
function VoteControlComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r7.poll.question.text, "\n");
} }
function VoteControlComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_6_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em");
    i0.ɵɵtext(1, "You have already voted!");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ws-standard-poll", 23);
    i0.ɵɵlistener("optionSelected", function VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template_ws_standard_poll_optionSelected_0_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.selected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("poll", ctx_r28.poll)("voted", ctx_r28.voted)("initialSelection", ctx_r28.selection);
} }
function VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ws-weighted-poll", 23);
    i0.ɵɵlistener("optionSelected", function VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template_ws_weighted_poll_optionSelected_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.selected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("poll", ctx_r29.poll)("voted", ctx_r29.voted)("initialSelection", ctx_r29.selection);
} }
function VoteControlComponent_div_8_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, VoteControlComponent_div_8_div_6_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵtemplate(2, VoteControlComponent_div_8_div_6_em_2_Template, 2, 0, "em", 21);
    i0.ɵɵtemplate(3, VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template, 1, 3, "ws-standard-poll", 22);
    i0.ɵɵtemplate(4, VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template, 1, 3, "ws-weighted-poll", 22);
    i0.ɵɵtemplate(5, VoteControlComponent_div_8_div_6_ng_container_5_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.beforeOptionsTemplate ? ctx_r15.beforeOptionsTemplate : _r0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.voted.hasVoted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.poll.type === "standard");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.poll.type === "weighted");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.afterOptionsTemplate ? ctx_r15.afterOptionsTemplate : _r0);
} }
function VoteControlComponent_div_8_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_7_ws_poll_result_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ws-poll-result", 25);
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("poll", ctx_r36.poll)("results", ctx_r36.results);
} }
function VoteControlComponent_div_8_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, VoteControlComponent_div_8_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵtemplate(2, VoteControlComponent_div_8_div_7_ws_poll_result_2_Template, 1, 2, "ws-poll-result", 24);
    i0.ɵɵtemplate(3, VoteControlComponent_div_8_div_7_ng_container_3_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.beforeResultTemplate ? ctx_r16.beforeResultTemplate : _r0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.results);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.afterResultTemplate ? ctx_r16.afterResultTemplate : _r0);
} }
function VoteControlComponent_div_8_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); ctx_r38.vote(); return false; });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtext(2, "\u00A0 Vote");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r17.hasVotesSelected());
} }
function VoteControlComponent_div_8_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); ctx_r40.unvote(); return false; });
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵtext(2, "\u00A0 Clear Vote");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(2); ctx_r42.changeView("result"); return false; });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵtext(2, "\u00A0 View Results");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); ctx_r44.changeView("question"); return false; });
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵtext(2, "\u00A0 View Choices");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); ctx_r46.resetClick(ctx_r46.poll); return false; });
    i0.ɵɵelement(1, "i", 33);
    i0.ɵɵtext(2, "\u00A0 Reset");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(2); ctx_r48.extendClick(ctx_r48.poll); return false; });
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵtext(2, "\u00A0 Extend");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); ctx_r50.editClick(ctx_r50.poll); return false; });
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵtext(2, "\u00A0 Edit");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); ctx_r52.deleteClick(ctx_r52.poll); return false; });
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵtext(2, "\u00A0 Delete");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, VoteControlComponent_div_8_ng_container_2_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵelementStart(4, "div", 11);
    i0.ɵɵtemplate(5, VoteControlComponent_div_8_ng_container_5_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, VoteControlComponent_div_8_div_6_Template, 6, 5, "div", 12);
    i0.ɵɵtemplate(7, VoteControlComponent_div_8_div_7_Template, 4, 3, "div", 12);
    i0.ɵɵelement(8, "hr");
    i0.ɵɵelementStart(9, "div", 13);
    i0.ɵɵtemplate(10, VoteControlComponent_div_8_button_10_Template, 3, 1, "button", 14);
    i0.ɵɵtext(11, "\u00A0 ");
    i0.ɵɵtemplate(12, VoteControlComponent_div_8_button_12_Template, 3, 0, "button", 15);
    i0.ɵɵtext(13, "\u00A0 ");
    i0.ɵɵtemplate(14, VoteControlComponent_div_8_button_14_Template, 3, 0, "button", 16);
    i0.ɵɵtext(15, "\u00A0 ");
    i0.ɵɵtemplate(16, VoteControlComponent_div_8_button_16_Template, 3, 0, "button", 16);
    i0.ɵɵtext(17, "\u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 17);
    i0.ɵɵtemplate(19, VoteControlComponent_div_8_button_19_Template, 3, 0, "button", 16);
    i0.ɵɵtext(20, "\u00A0 ");
    i0.ɵɵtemplate(21, VoteControlComponent_div_8_button_21_Template, 3, 0, "button", 16);
    i0.ɵɵtext(22, "\u00A0 ");
    i0.ɵɵtemplate(23, VoteControlComponent_div_8_button_23_Template, 3, 0, "button", 16);
    i0.ɵɵtext(24, "\u00A0 ");
    i0.ɵɵtemplate(25, VoteControlComponent_div_8_button_25_Template, 3, 0, "button", 18);
    i0.ɵɵtext(26, "\u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 19);
    i0.ɵɵtemplate(28, VoteControlComponent_div_8_ng_container_28_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r6 = i0.ɵɵreference(7);
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.titleTemplate ? ctx_r8.titleTemplate : _r2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.questionTemplate ? ctx_r8.questionTemplate : _r6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.view === "question");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.view === "result");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.showVoteButton());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showClearVoteButton());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.viewResultsState() && ctx_r8.state === "running");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.view === "result" && ctx_r8.state === "running");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.showResetButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showExtendButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showEditButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showDeleteButton);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.footerTemplate ? ctx_r8.footerTemplate : _r4);
} }
class VoteControlComponent {
    constructor() {
        // events
        this.edit = new core_1.EventEmitter();
        this.extend = new core_1.EventEmitter();
        // tslint:disable-next-line:no-output-native
        this.reset = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.viewChange = new core_1.EventEmitter();
        this.voteSelected = new core_1.EventEmitter();
        this.voteRemoved = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.view = 'question';
        this.init();
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
        this.init();
    }
    init() {
        if (this.poll && this.results && this.voted) {
            this.selection = this.voted.votes;
            this.calculateState();
        }
    }
    calculateState() {
        this.state = 'running';
        const now = new Date();
        const start = this.parseDate(this.poll.start);
        const expiry = this.parseDate(this.poll.expiry);
        if (now < start) {
            this.state = 'Not yet started';
            this.view = 'result';
            return;
        }
        if (now > expiry) {
            this.state = 'expired';
            this.view = 'result';
            return;
        }
    }
    selected(model) {
        this.selection = model;
    }
    vote() {
        if (this.voted.hasVoted) {
            alert('You have already voted');
        }
        else {
            this.voteSelected.emit(this.selection);
        }
    }
    unvote() {
        this.voteRemoved.emit(this.selection);
    }
    changeView(view) {
        this.view = view;
        this.viewChange.emit(view);
    }
    viewResultsState() {
        if (this.view === 'result') {
            return false;
        }
        if (!this.poll) {
            return false;
        }
        if (this.poll.anonymousResults) {
            return false;
        }
        const time = new Date().getTime();
        const end = this.parseDate(this.poll.expiry).getTime();
        if (this.poll.showingResults || time > end) {
            return true;
        }
        return false;
    }
    parseDate(value) {
        if (typeof value === 'string') {
            return new Date(value);
        }
        return value;
    }
    hasVotesSelected() {
        if (generic_util_1.GenericUtil.isNullOrUndefined(this.selection)) {
            return true;
        }
        return this.selection.length === 0;
    }
    editClick(poll) {
        this.edit.emit(poll);
    }
    extendClick(poll) {
        this.extend.emit(poll);
    }
    resetClick(poll) {
        this.reset.emit(poll);
    }
    deleteClick(poll) {
        this.delete.emit(poll);
    }
    showVoteButton() {
        return this.voted && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
    }
    showClearVoteButton() {
        return this.poll && this.voted && this.voted.hasVoted && this.view === 'question' && this.poll.allowingReVote
            && this.state === 'running';
    }
}
exports.VoteControlComponent = VoteControlComponent;
VoteControlComponent.ɵfac = function VoteControlComponent_Factory(t) { return new (t || VoteControlComponent)(); };
VoteControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VoteControlComponent, selectors: [["ws-vote-control"]], inputs: { showEditButton: "showEditButton", showExtendButton: "showExtendButton", showResetButton: "showResetButton", showDeleteButton: "showDeleteButton", poll: "poll", results: "results", voted: "voted", beforeOptionsTemplate: "beforeOptionsTemplate", afterOptionsTemplate: "afterOptionsTemplate", beforeResultTemplate: "beforeResultTemplate", afterResultTemplate: "afterResultTemplate", titleTemplate: "titleTemplate", footerTemplate: "footerTemplate", questionTemplate: "questionTemplate" }, outputs: { edit: "edit", extend: "extend", reset: "reset", delete: "delete", viewChange: "viewChange", voteSelected: "voteSelected", voteRemoved: "voteRemoved" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 1, consts: [["voteControlEmptyTemplate", ""], ["voteControlDefaultTitleTemplate", ""], ["voteControlDefaultFooterTemplate", ""], ["voteControlDefaultQuestionTemplate", ""], ["class", "card", 4, "ngIf"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "card"], [1, "card-header"], [4, "ngTemplateOutlet"], [1, "card-body"], [1, "card-title"], ["class", "card-text", 4, "ngIf"], [1, "pull-left"], ["class", "btn btn-success", "href", "#", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-warning", "href", "#", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "href", "#", 3, "click", 4, "ngIf"], [1, "pull-right"], ["class", "btn btn-danger", "href", "#", 3, "click", 4, "ngIf"], [1, "card-footer", "text-muted"], [1, "card-text"], [4, "ngIf"], [3, "poll", "voted", "initialSelection", "optionSelected", 4, "ngIf"], [3, "poll", "voted", "initialSelection", "optionSelected"], [3, "poll", "results", 4, "ngIf"], [3, "poll", "results"], ["href", "#", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-check"], ["href", "#", 1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-close"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-area-chart"], [1, "fa", "fa-question-circle"], [1, "fa", "fa-refresh"], [1, "fa", "fa-arrows-h"], [1, "fa", "fa-edit"], ["href", "#", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"]], template: function VoteControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, VoteControlComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, VoteControlComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, VoteControlComponent_ng_template_4_Template, 8, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, VoteControlComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, VoteControlComponent_div_8_Template, 29, 13, "div", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.poll);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.StandardPollComponent, i3.WeightedPollComponent, i4.PollResultComponent], pipes: [i1.DatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VoteControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-vote-control',
                templateUrl: './vote-control.component.html',
                styleUrls: ['./vote-control.component.css']
            }]
    }], function () { return []; }, { showEditButton: [{
            type: core_1.Input
        }], showExtendButton: [{
            type: core_1.Input
        }], showResetButton: [{
            type: core_1.Input
        }], showDeleteButton: [{
            type: core_1.Input
        }], poll: [{
            type: core_1.Input
        }], results: [{
            type: core_1.Input
        }], voted: [{
            type: core_1.Input
        }], beforeOptionsTemplate: [{
            type: core_1.Input
        }], afterOptionsTemplate: [{
            type: core_1.Input
        }], beforeResultTemplate: [{
            type: core_1.Input
        }], afterResultTemplate: [{
            type: core_1.Input
        }], titleTemplate: [{
            type: core_1.Input
        }], footerTemplate: [{
            type: core_1.Input
        }], questionTemplate: [{
            type: core_1.Input
        }], edit: [{
            type: core_1.Output
        }], extend: [{
            type: core_1.Output
        }], reset: [{
            type: core_1.Output
        }], delete: [{
            type: core_1.Output
        }], viewChange: [{
            type: core_1.Output
        }], voteSelected: [{
            type: core_1.Output
        }], voteRemoved: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvcG9sbHMvdm90ZS1jb250cm9sL3ZvdGUtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL3BvbGxzL3ZvdGUtY29udHJvbC92b3RlLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTRGO0FBSzVGLGlFQUE2RDs7Ozs7Ozs7SUNGM0QsWUFDQTtJQUFBLHFCQUNBO0lBQUEsZ0NBQTBCO0lBQUEsWUFBd0U7SUFBQSxpQkFBUTs7O0lBRjFHLHVEQUNBO0lBQzBCLGVBQXdFO0lBQXhFLCtHQUF3RTs7O0lBS2xHLGdDQUE2RDtJQUFBLDhCQUFRO0lBQUEsdUJBQU87SUFBQSxpQkFBUztJQUFBLGlCQUFROzs7SUFEN0YsZ0NBQTZEO0lBQUEsOEJBQVE7SUFBQSx3QkFBUTtJQUFBLGlCQUFTO0lBQ3RGLCtGQUE2RDtJQUMzRCxZQUFzRDs7SUFBQSxpQkFBUTs7O0lBRHpELGVBQWtDO0lBQWxDLHdEQUFrQztJQUN2QyxlQUFzRDtJQUF0RCxzR0FBc0Q7OztJQUV4RCxnQ0FBcUQ7SUFBQSw4QkFBUTtJQUFBLHlCQUFTO0lBQUEsaUJBQVM7SUFBQSxpQkFBUTs7O0lBRHZGLGdDQUFxRDtJQUFBLDhCQUFRO0lBQUEseUJBQVM7SUFBQSxpQkFBUztJQUMvRSwrRkFBcUQ7SUFDckQsWUFBdUQ7O0lBQUEsaUJBQVE7OztJQUR4RCxlQUEwQjtJQUExQixpREFBMEI7SUFDakMsZUFBdUQ7SUFBdkQsd0dBQXVEOzs7SUFOdkQsZ0NBQTBCO0lBQUEsOEJBQVE7SUFBQSx1QkFBTztJQUFBLGlCQUFTO0lBQUMsWUFBWTtJQUFBLGlC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LCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7O2tCQUlFLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUdMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUdMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUdMLGFBQU07O2tCQUNOLGFBQU07O2tCQUVOLGFBQU07O2tCQUNOLGFBQU07O2tCQUVOLGFBQU07O2tCQUNOLGFBQU07O2tCQUNOLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9sbCB9IGZyb20gJy4uL21vZGVscy9wb2xsJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4uL21vZGVscy9yZXN1bHQnO1xuaW1wb3J0IHsgVm90ZSB9IGZyb20gJy4uL21vZGVscy92b3RlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2VuZXJpY1V0aWwgfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbC9nZW5lcmljLnV0aWwnO1xuaW1wb3J0IHsgVm90ZUVudHJ5IH0gZnJvbSAnLi4vbW9kZWxzL3ZvdGUtZW50cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cy12b3RlLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vdm90ZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdm90ZS1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWb3RlQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gYnV0dG9uIGZsYWdzXG4gIEBJbnB1dCgpIHNob3dFZGl0QnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93RXh0ZW5kQnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93UmVzZXRCdXR0b246IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dEZWxldGVCdXR0b246IGJvb2xlYW47XG5cbiAgLy8gaW5wdXQgbW9kZWxzXG4gIEBJbnB1dCgpIHBvbGw6IFBvbGw7XG4gIEBJbnB1dCgpIHJlc3VsdHM6IFJlc3VsdFtdO1xuICBASW5wdXQoKSB2b3RlZDogVm90ZTtcblxuICAvLyB0ZW1wbGF0ZXNcbiAgQElucHV0KCkgYmVmb3JlT3B0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBhZnRlck9wdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgYmVmb3JlUmVzdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGFmdGVyUmVzdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBxdWVzdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgZWRpdDogRXZlbnRFbWl0dGVyPFBvbGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXh0ZW5kOiBFdmVudEVtaXR0ZXI8UG9sbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZXNldDogRXZlbnRFbWl0dGVyPFBvbGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8UG9sbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHZpZXdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdm90ZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8Vm90ZUVudHJ5W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdm90ZVJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxWb3RlRW50cnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdmlldzogc3RyaW5nO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc3RhdGU6IHN0cmluZztcbiAgc2VsZWN0aW9uOiBWb3RlRW50cnlbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gJ3F1ZXN0aW9uJztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtbGlmZWN5Y2xlLWludGVyZmFjZSB0eXBlZGVmXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb2xsICYmIHRoaXMucmVzdWx0cyAmJiB0aGlzLnZvdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMudm90ZWQudm90ZXM7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9ICdydW5uaW5nJztcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5wYXJzZURhdGUodGhpcy5wb2xsLnN0YXJ0KTtcbiAgICBjb25zdCBleHBpcnkgPSB0aGlzLnBhcnNlRGF0ZSh0aGlzLnBvbGwuZXhwaXJ5KTtcblxuICAgIGlmIChub3cgPCBzdGFydCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdOb3QgeWV0IHN0YXJ0ZWQnO1xuICAgICAgdGhpcy52aWV3ID0gJ3Jlc3VsdCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vdyA+IGV4cGlyeSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdleHBpcmVkJztcbiAgICAgIHRoaXMudmlldyA9ICdyZXN1bHQnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkKG1vZGVsOiBWb3RlRW50cnlbXSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbW9kZWw7XG4gIH1cblxuICB2b3RlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZvdGVkLmhhc1ZvdGVkKSB7XG4gICAgICBhbGVydCgnWW91IGhhdmUgYWxyZWFkeSB2b3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZvdGVTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICB1bnZvdGUoKTogdm9pZCB7XG4gICAgdGhpcy52b3RlUmVtb3ZlZC5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgfVxuXG4gIGNoYW5nZVZpZXcodmlldzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB0aGlzLnZpZXdDaGFuZ2UuZW1pdCh2aWV3KTtcbiAgfVxuXG4gIHZpZXdSZXN1bHRzU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudmlldyA9PT0gJ3Jlc3VsdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucG9sbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvbGwuYW5vbnltb3VzUmVzdWx0cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBlbmQgPSB0aGlzLnBhcnNlRGF0ZSh0aGlzLnBvbGwuZXhwaXJ5KS5nZXRUaW1lKCk7XG4gICAgaWYgKHRoaXMucG9sbC5zaG93aW5nUmVzdWx0cyB8fCB0aW1lID4gZW5kKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwYXJzZURhdGUodmFsdWU6IGFueSk6IERhdGUge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGhhc1ZvdGVzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKEdlbmVyaWNVdGlsLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc2VsZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGVkaXRDbGljayhwb2xsOiBQb2xsKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0LmVtaXQocG9sbCk7XG4gIH1cblxuICBleHRlbmRDbGljayhwb2xsOiBQb2xsKTogdm9pZCB7XG4gICAgdGhpcy5leHRlbmQuZW1pdChwb2xsKTtcbiAgfVxuXG4gIHJlc2V0Q2xpY2socG9sbDogUG9sbCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXQuZW1pdChwb2xsKTtcbiAgfVxuXG4gIGRlbGV0ZUNsaWNrKHBvbGw6IFBvbGwpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KHBvbGwpO1xuICB9XG5cbiAgc2hvd1ZvdGVCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudm90ZWQgJiYgIXRoaXMudm90ZWQuaGFzVm90ZWQgJiYgdGhpcy52aWV3ID09PSAncXVlc3Rpb24nICYmIHRoaXMuc3RhdGUgPT09ICdydW5uaW5nJztcbiAgfVxuXG4gIHNob3dDbGVhclZvdGVCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9sbCAmJiB0aGlzLnZvdGVkICYmIHRoaXMudm90ZWQuaGFzVm90ZWQgJiYgdGhpcy52aWV3ID09PSAncXVlc3Rpb24nICYmIHRoaXMucG9sbC5hbGxvd2luZ1JlVm90ZVxuICAgICAgICAmJiB0aGlzLnN0YXRlID09PSAncnVubmluZyc7XG4gIH1cblxufVxuIiwiPG5nLXRlbXBsYXRlICN2b3RlQ29udHJvbEVtcHR5VGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICN2b3RlQ29udHJvbERlZmF1bHRUaXRsZVRlbXBsYXRlPlxuICB7eyBwb2xsLnRpdGxlLnRleHQgfX1cbiAgPGJyIC8+XG4gIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5DcmVhdGVkIEJ5OiB7eyBwb2xsLmNyZWF0ZWRCeS5maXJzdE5hbWUgfX0ge3sgcG9sbC5jcmVhdGVkQnkubGFzdE5hbWUgfX08L3NtYWxsPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjdm90ZUNvbnRyb2xEZWZhdWx0Rm9vdGVyVGVtcGxhdGU+XG4gIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48c3Ryb25nPlN0YXR1czo8L3N0cm9uZz4ge3sgc3RhdGUgfX0gPC9zbWFsbD4mbmJzcDt8Jm5ic3A7XG4gIDxzbWFsbCAqbmdJZj1cInN0YXRlICE9ICdOb3QgeWV0IHN0YXJ0ZWQnXCIgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PHN0cm9uZz5TdGFydGVkOjwvc3Ryb25nPlxuICA8c21hbGwgKm5nSWY9XCJzdGF0ZSA9PSAnTm90IHlldCBzdGFydGVkJ1wiIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxzdHJvbmc+U3RhcnRzOjwvc3Ryb25nPjwvc21hbGw+XG4gICAge3sgcG9sbC5zdGFydCB8IGRhdGU6ICdFRUVFLCBNTU1NIGQsIHksIEhIOm1tIHp6enonIH19PC9zbWFsbD4mbmJzcDtcbiAgPHNtYWxsICpuZ0lmPVwic3RhdGUgIT0gJ2V4cGlyZWQnXCIgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PHN0cm9uZz5GaW5pc2hlczo8L3N0cm9uZz5cbiAgPHNtYWxsICpuZ0lmPVwic3RhdGUgPT0gJ2V4cGlyZWQnXCIgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PHN0cm9uZz5GaW5pc2hlZDo8L3N0cm9uZz48L3NtYWxsPlxuICB7eyBwb2xsLmV4cGlyeSB8IGRhdGU6ICdFRUVFLCBNTU1NIGQsIHksIEhIOm1tIHp6enonIH19PC9zbWFsbD5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI3ZvdGVDb250cm9sRGVmYXVsdFF1ZXN0aW9uVGVtcGxhdGU+XG4gIHt7IHBvbGwucXVlc3Rpb24udGV4dCB9fVxuPC9uZy10ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cInBvbGxcIj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlVGVtcGxhdGUgPyB0aXRsZVRlbXBsYXRlIDogdm90ZUNvbnRyb2xEZWZhdWx0VGl0bGVUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicXVlc3Rpb25UZW1wbGF0ZSA/IHF1ZXN0aW9uVGVtcGxhdGUgOiB2b3RlQ29udHJvbERlZmF1bHRRdWVzdGlvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiICpuZ0lmPVwidmlldyA9PT0gJ3F1ZXN0aW9uJ1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJlZm9yZU9wdGlvbnNUZW1wbGF0ZSA/IGJlZm9yZU9wdGlvbnNUZW1wbGF0ZSA6IHZvdGVDb250cm9sRW1wdHlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPGVtICpuZ0lmPVwidm90ZWQuaGFzVm90ZWRcIj5Zb3UgaGF2ZSBhbHJlYWR5IHZvdGVkITwvZW0+XG4gICAgICA8d3Mtc3RhbmRhcmQtcG9sbCAqbmdJZj1cInBvbGwudHlwZSA9PT0gJ3N0YW5kYXJkJ1wiIFtwb2xsXT1cInBvbGxcIiBbdm90ZWRdPVwidm90ZWRcIiBbaW5pdGlhbFNlbGVjdGlvbl09XCJzZWxlY3Rpb25cIlxuICAgICAgICAob3B0aW9uU2VsZWN0ZWQpPVwic2VsZWN0ZWQoJGV2ZW50KVwiPlxuICAgICAgPC93cy1zdGFuZGFyZC1wb2xsPlxuICAgICAgPHdzLXdlaWdodGVkLXBvbGwgKm5nSWY9XCJwb2xsLnR5cGUgPT09ICd3ZWlnaHRlZCdcIiBbcG9sbF09XCJwb2xsXCIgW3ZvdGVkXT1cInZvdGVkXCIgW2luaXRpYWxTZWxlY3Rpb25dPVwic2VsZWN0aW9uXCJcbiAgICAgICAgKG9wdGlvblNlbGVjdGVkKT1cInNlbGVjdGVkKCRldmVudClcIj5cbiAgICAgIDwvd3Mtd2VpZ2h0ZWQtcG9sbD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhZnRlck9wdGlvbnNUZW1wbGF0ZSA/IGFmdGVyT3B0aW9uc1RlbXBsYXRlIDogdm90ZUNvbnRyb2xFbXB0eVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiICpuZ0lmPVwidmlldyA9PT0gJ3Jlc3VsdCdcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJiZWZvcmVSZXN1bHRUZW1wbGF0ZSA/IGJlZm9yZVJlc3VsdFRlbXBsYXRlIDogdm90ZUNvbnRyb2xFbXB0eVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8d3MtcG9sbC1yZXN1bHQgKm5nSWY9XCJyZXN1bHRzXCIgW3BvbGxdPVwicG9sbFwiIFtyZXN1bHRzXT1cInJlc3VsdHNcIj48L3dzLXBvbGwtcmVzdWx0PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFmdGVyUmVzdWx0VGVtcGxhdGUgPyBhZnRlclJlc3VsdFRlbXBsYXRlIDogdm90ZUNvbnRyb2xFbXB0eVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJoYXNWb3Rlc1NlbGVjdGVkKClcIiAqbmdJZj1cInNob3dWb3RlQnV0dG9uKClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGhyZWY9XCIjXCJcbiAgICAgICAgKGNsaWNrKT1cInZvdGUoKTsgZmFsc2U7XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4mbmJzcDsgVm90ZTwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dDbGVhclZvdGVCdXR0b24oKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwidW52b3RlKCk7IGZhbHNlO1wiPjxpXG4gICAgICAgICAgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT4mbmJzcDsgQ2xlYXIgVm90ZTwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiAqbmdJZj1cInZpZXdSZXN1bHRzU3RhdGUoKSAmJiBzdGF0ZSA9PT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiI1wiXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2VWaWV3KCdyZXN1bHQnKTsgZmFsc2U7XCI+PGkgY2xhc3M9XCJmYSBmYS1hcmVhLWNoYXJ0XCI+PC9pPiZuYnNwOyBWaWV3IFJlc3VsdHM8L2J1dHRvbj4mbmJzcDtcbiAgICAgIDxidXR0b24gKm5nSWY9XCJ2aWV3ID09PSAncmVzdWx0JyAmJiBzdGF0ZSA9PT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiI1wiXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2VWaWV3KCdxdWVzdGlvbicpOyBmYWxzZTtcIj48aSBjbGFzcz1cImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT4mbmJzcDsgVmlldyBDaG9pY2VzPC9idXR0b24+Jm5ic3A7XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93UmVzZXRCdXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIjXCIgKGNsaWNrKT1cInJlc2V0Q2xpY2socG9sbCk7IGZhbHNlO1wiPjxpXG4gICAgICAgIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiPjwvaT4mbmJzcDsgUmVzZXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RXh0ZW5kQnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiI1wiIChjbGljayk9XCJleHRlbmRDbGljayhwb2xsKTsgZmFsc2U7XCI+PGlcbiAgICAgICAgICBjbGFzcz1cImZhIGZhLWFycm93cy1oXCI+PC9pPiZuYnNwOyBFeHRlbmQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RWRpdEJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNcIiAoY2xpY2spPVwiZWRpdENsaWNrKHBvbGwpOyBmYWxzZTtcIj48aVxuICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT4mbmJzcDsgRWRpdDwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dEZWxldGVCdXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwiZGVsZXRlQ2xpY2socG9sbCk7IGZhbHNlO1wiPjxpXG4gICAgICAgICAgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4mbmJzcDsgRGVsZXRlPC9idXR0b24+Jm5ic3A7XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJUZW1wbGF0ZSA/IGZvb3RlclRlbXBsYXRlIDogdm90ZUNvbnRyb2xEZWZhdWx0Rm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==