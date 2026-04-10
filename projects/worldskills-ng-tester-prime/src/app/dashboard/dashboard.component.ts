import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
import { WsAlertComponent, WsDialogComponent, PollResultComponent } from '@worldskills/ng-ui';
import type { Poll, PollResult } from '@worldskills/ng-ui';

interface Notification {
  message: string;
  time: string;
  icon: string;
  color: string;
  bgColor: string;
  type: string;
  details?: Record<string, string>;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, FormsModule, DatePickerModule, WsAlertComponent, WsDialogComponent, PollResultComponent],
  template: `
    <!-- Alerts -->
    <div class="flex flex-col gap-3 mb-6">
      <ws-ng-ui-alert severity="warn" message="Votes API response time is degraded. The team is investigating." [closable]="true" />
      <ws-ng-ui-alert severity="info" message="WorldSkills Shanghai 2026 registration closes on 15 June 2026." [closable]="true" />
    </div>

    <!-- Hero banner -->
    <div class="rounded-xl p-8 mb-8 text-white" style="background: linear-gradient(135deg, #3d0e61 0%, #0E779F 100%)">
      <h1 class="text-3xl font-bold m-0 mb-2" style="color: #fff">Welcome back, Waseem</h1>
      <p class="text-white/70 m-0 text-base">Here's what's happening across your WorldSkills applications.</p>
    </div>

    <!-- Stats row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      @for (stat of stats; track stat.label) {
        <div class="rounded-xl border border-gray-200 bg-white p-5 relative overflow-hidden transition-shadow hover:shadow-md">
          <div class="absolute top-0 right-0 w-20 h-20 -mr-4 -mt-4 rounded-full opacity-10" [style.background]="stat.color"></div>
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center w-14 h-14 rounded-xl" [style.background]="stat.bgColor">
              <i [class]="stat.icon" class="text-2xl" [style.color]="stat.color"></i>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 m-0 mb-1">{{ stat.label }}</p>
              <p class="text-3xl font-bold m-0" style="font-family: Inter, sans-serif; color: var(--dark)">{{ stat.value }}</p>
            </div>
          </div>
          @if (stat.trend) {
            <div class="mt-3 flex items-center gap-1">
              <i class="pi text-xs" [class]="stat.trendUp ? 'pi-arrow-up' : 'pi-arrow-down'" [style.color]="stat.trendUp ? '#28a745' : '#dc3545'"></i>
              <span class="text-xs" [style.color]="stat.trendUp ? '#28a745' : '#dc3545'">{{ stat.trend }}</span>
              <span class="text-xs text-gray-400 ml-1">vs last year</span>
            </div>
          }
        </div>
      }
    </div>

    <!-- Quick Access -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold m-0">Quick Access</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        @for (tile of navTiles; track tile.label) {
          <a [routerLink]="tile.route" class="no-underline group">
            <div class="rounded-xl border border-gray-200 bg-white p-5 h-full transition-all hover:shadow-lg hover:border-transparent group-hover:-translate-y-0.5">
              <div class="flex items-start gap-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-xl transition-colors" [style.background]="tile.bgColor">
                  <i [class]="tile.icon" class="text-xl" [style.color]="tile.color"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-base font-semibold m-0 mb-1" style="color: var(--dark, #434343)">{{ tile.label }}</h3>
                  <p class="text-sm text-gray-400 m-0 leading-relaxed">{{ tile.description }}</p>
                </div>
                <i class="pi pi-arrow-right text-gray-300 group-hover:text-gray-500 transition-colors mt-1"></i>
              </div>
            </div>
          </a>
        }
      </div>
    </div>

    <!-- Activity section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">

      <!-- Upcoming Events -->
      <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 class="text-base font-semibold m-0">Upcoming Events</h3>
          <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{{ events.length }} events</span>
        </div>
        <div class="p-5">
          <div class="flex flex-col gap-4">
            @for (event of events; track event.name; let last = $last) {
              <div class="flex items-center gap-4" [class.pb-4]="!last" [class.border-b]="!last" [class.border-gray-100]="!last">
                <div class="flex items-center justify-center w-11 h-11 rounded-lg text-sm font-bold text-white" [style.background]="event.badgeColor">
                  {{ event.month }}
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold m-0 mb-0.5">{{ event.name }}</p>
                  <div class="flex items-center gap-2 text-xs text-gray-400">
                    <i class="pi pi-map-marker text-xs"></i>
                    <span>{{ event.location }}</span>
                  </div>
                </div>
                <span class="text-xs font-medium px-2.5 py-1 rounded-full" [style.background]="event.badgeBg" [style.color]="event.badgeColor">
                  {{ event.date }}
                </span>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- System Status -->
      <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 class="text-base font-semibold m-0">System Status</h3>
          <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600">All operational</span>
        </div>
        <div class="p-5">
          <div class="flex flex-col gap-1">
            @for (service of services; track service.name) {
              <div class="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="flex items-center gap-3">
                  <span class="relative flex h-3 w-3">
                    @if (service.pulse) {
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" [style.background]="service.statusColor"></span>
                    }
                    <span class="relative inline-flex rounded-full h-3 w-3" [style.background]="service.statusColor"></span>
                  </span>
                  <span class="text-sm font-medium">{{ service.name }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-24 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div class="h-full rounded-full transition-all" [style.width]="service.uptime" [style.background]="service.statusColor"></div>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 w-12 text-right">{{ service.uptime }}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>

    <!-- File Uploads by Type -->
    <div class="rounded-xl border border-gray-200 bg-white overflow-hidden mb-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 border-b border-gray-100 gap-3">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-8 h-8 rounded-lg" style="background: rgba(14, 119, 159, 0.1)">
            <i class="pi pi-upload text-sm" style="color: #0E779F"></i>
          </div>
          <h3 class="text-base font-semibold m-0">Uploads by File Type</h3>
        </div>
        <div class="flex items-center gap-2">
          <p-datepicker [(ngModel)]="uploadDateRange" selectionMode="range" dateFormat="dd M yy" [showIcon]="true" placeholder="Filter by date range" appendTo="body" styleClass="text-sm" [style]="{ 'max-width': '280px' }" />
        </div>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          @for (ft of fileTypes; track ft.ext) {
            <div class="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
              <div class="flex items-center justify-center w-12 h-12 rounded-xl" [style.background]="ft.bgColor">
                <i [class]="ft.icon" class="text-2xl" [style.color]="ft.color"></i>
              </div>
              <span class="text-2xl font-bold" style="font-family: Inter, sans-serif">{{ ft.count }}</span>
              <span class="text-xs font-medium uppercase tracking-wider text-gray-400">{{ ft.label }}</span>
            </div>
          }
        </div>
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span class="text-sm text-gray-400">Total uploads</span>
          <span class="text-lg font-bold" style="font-family: Inter, sans-serif">{{ totalUploads }}</span>
        </div>
      </div>
    </div>

    <!-- Expired Poll -->
    <div class="rounded-xl border border-gray-200 bg-white overflow-hidden mb-8">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-8 h-8 rounded-lg" style="background: rgba(220, 53, 69, 0.1)">
            <i class="pi pi-chart-bar text-sm" style="color: #dc3545"></i>
          </div>
          <div>
            <h3 class="text-base font-semibold m-0">{{ expiredPoll.title.text }}</h3>
            <p class="text-xs text-gray-400 m-0">{{ expiredPoll.question.text }}</p>
          </div>
        </div>
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-500">Closed</span>
      </div>
      <div class="p-5">
        <ws-ng-ui-poll-result [poll]="expiredPoll" [results]="pollResults" />
      </div>
    </div>

    <!-- Recent notifications -->
    <div class="rounded-xl border border-gray-200 bg-white overflow-hidden mb-8">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 class="text-base font-semibold m-0">Recent Notifications</h3>
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{{ notifications.length }} new</span>
      </div>
      <div class="divide-y divide-gray-100">
        @for (notif of notifications; track notif.message) {
          <div class="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer" (click)="openNotification(notif)">
            <div class="flex items-center justify-center w-9 h-9 rounded-full mt-0.5 shrink-0" [style.background]="notif.bgColor">
              <i [class]="notif.icon" class="text-sm" [style.color]="notif.color"></i>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm m-0 mb-0.5">{{ notif.message }}</p>
              <p class="text-xs text-gray-400 m-0">{{ notif.time }}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0 mt-1">
              <span class="text-xs font-medium px-2 py-0.5 rounded-full" [style.background]="notif.bgColor" [style.color]="notif.color">{{ notif.type }}</span>
              <i class="pi pi-chevron-right text-xs text-gray-300"></i>
            </div>
          </div>
        }
      </div>
    </div>

    <!-- Notification detail dialog -->
    <ws-ng-ui-dialog [(visible)]="notifDialogVisible" [title]="selectedNotif()?.message ?? ''" width="32rem">
      @if (selectedNotif(); as notif) {
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div class="flex items-center justify-center w-10 h-10 rounded-full" [style.background]="notif.bgColor">
              <i [class]="notif.icon" [style.color]="notif.color"></i>
            </div>
            <div>
              <span class="text-xs font-medium px-2 py-0.5 rounded-full" [style.background]="notif.bgColor" [style.color]="notif.color">{{ notif.type }}</span>
              <p class="text-xs text-gray-400 m-0 mt-1">{{ notif.time }}</p>
            </div>
          </div>
          @if (notif.details) {
            <div class="grid grid-cols-2 gap-x-6 gap-y-3">
              @for (entry of getDetailEntries(notif.details); track entry[0]) {
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 m-0 mb-1">{{ entry[0] }}</p>
                  <p class="text-sm font-medium m-0">{{ entry[1] }}</p>
                </div>
              }
            </div>
          }
        </div>
      }
    </ws-ng-ui-dialog>
  `,
})
export class DashboardComponent {
  stats = [
    { label: 'Competitors', value: '1,247', icon: 'pi pi-users', color: '#0E779F', bgColor: 'rgba(14, 119, 159, 0.1)', trend: '+12%', trendUp: true },
    { label: 'Skills', value: '62', icon: 'pi pi-wrench', color: '#009e4f', bgColor: 'rgba(0, 158, 79, 0.1)', trend: '+3', trendUp: true },
    { label: 'Countries', value: '85', icon: 'pi pi-globe', color: '#7a2182', bgColor: 'rgba(122, 33, 130, 0.1)', trend: null, trendUp: false },
    { label: 'Events', value: '3', icon: 'pi pi-calendar', color: '#f39200', bgColor: 'rgba(243, 146, 0, 0.1)', trend: '-1', trendUp: false },
  ];

  navTiles = [
    { label: 'Settings', description: 'Manage application preferences and profile settings', route: '/settings', icon: 'pi pi-cog', color: '#0E779F', bgColor: 'rgba(14, 119, 159, 0.1)' },
    { label: 'Admin Panel', description: 'User management, roles, and system logs', route: '/admin', icon: 'pi pi-shield', color: '#7a2182', bgColor: 'rgba(122, 33, 130, 0.1)' },
    { label: 'My Profile', description: 'View and update your account details', route: '/profile', icon: 'pi pi-user', color: '#009e4f', bgColor: 'rgba(0, 158, 79, 0.1)' },
  ];

  events = [
    { name: 'WorldSkills Shanghai 2026', location: 'Shanghai, China', date: 'Oct 2026', month: 'OCT', badgeBg: 'rgba(14, 119, 159, 0.1)', badgeColor: '#0E779F' },
    { name: 'EuroSkills 2027', location: 'Luxembourg', date: 'Sep 2027', month: 'SEP', badgeBg: 'rgba(0, 158, 79, 0.1)', badgeColor: '#009e4f' },
    { name: 'WorldSkills Aichi 2028', location: 'Aichi, Japan', date: 'Nov 2028', month: 'NOV', badgeBg: 'rgba(243, 146, 0, 0.1)', badgeColor: '#f39200' },
  ];

  services = [
    { name: 'Auth API', uptime: '99.9%', statusColor: '#28a745', pulse: false },
    { name: 'Resources API', uptime: '99.8%', statusColor: '#28a745', pulse: false },
    { name: 'Forums API', uptime: '99.7%', statusColor: '#28a745', pulse: false },
    { name: 'Votes API', uptime: '98.5%', statusColor: '#FEE300', pulse: true },
  ];

  uploadDateRange: Date[] | null = null;

  fileTypes = [
    { ext: 'pdf', label: 'PDF', count: 342, icon: 'pi pi-file-pdf', color: '#dc3545', bgColor: 'rgba(220, 53, 69, 0.1)' },
    { ext: 'image', label: 'Images', count: 1_204, icon: 'pi pi-image', color: '#0E779F', bgColor: 'rgba(14, 119, 159, 0.1)' },
    { ext: 'docx', label: 'Word', count: 89, icon: 'pi pi-file-word', color: '#362D79', bgColor: 'rgba(54, 45, 121, 0.1)' },
    { ext: 'xlsx', label: 'Excel', count: 156, icon: 'pi pi-file-excel', color: '#009e4f', bgColor: 'rgba(0, 158, 79, 0.1)' },
    { ext: 'mp4', label: 'Video', count: 47, icon: 'pi pi-video', color: '#7a2182', bgColor: 'rgba(122, 33, 130, 0.1)' },
    { ext: 'zip', label: 'Archives', count: 63, icon: 'pi pi-box', color: '#f39200', bgColor: 'rgba(243, 146, 0, 0.1)' },
  ];

  get totalUploads(): number {
    return this.fileTypes.reduce((sum, ft) => sum + ft.count, 0);
  }

  expiredPoll: Poll = {
    id: 1,
    title: { lang_code: 'en', text: 'Host City Selection 2028' },
    question: { lang_code: 'en', text: 'Which city should host WorldSkills 2028?' },
    type: 'standard',
    numberOfSelections: 1,
    anonymousVoting: false,
    anonymousResults: false,
    showingResults: true,
    allowingReVote: false,
    allowingAbstain: true,
    whitelist: false,
    deleted: false,
    created: '2024-01-15',
    start: '2024-03-01',
    expiry: '2024-06-01',
    createdBy: { id: 1, firstName: 'Admin', lastName: 'User' } as any,
    entity: { id: 1, name: { lang_code: 'en', text: 'WorldSkills International' } } as any,
    entityPath: { items: [] } as any,
    options: [
      { id: 1, text: { lang_code: 'en', text: 'Aichi, Japan' }, deleted: false },
      { id: 2, text: { lang_code: 'en', text: 'Busan, South Korea' }, deleted: false },
      { id: 3, text: { lang_code: 'en', text: 'Singapore' }, deleted: false },
    ],
  };

  pollResults: PollResult[] = [
    { id: 1, count: 42, points: 42, option: this.expiredPoll.options[0] },
    { id: 2, count: 31, points: 31, option: this.expiredPoll.options[1] },
    { id: 3, count: 12, points: 12, option: this.expiredPoll.options[2] },
  ];

  notifications: Notification[] = [
    {
      message: 'New Delegate Registered',
      time: '4:57 AM',
      icon: 'pi pi-user-plus',
      color: '#009e4f',
      bgColor: 'rgba(0, 158, 79, 0.1)',
      type: 'Registration',
      details: { 'First Name': 'Essa', 'Last Name': 'Bin Essa', 'Member': 'Kuwait', 'Position': 'Official Delegate', 'Person ID': '240417' },
    },
    {
      message: 'New Delegate Registered',
      time: '9:09 AM',
      icon: 'pi pi-user-plus',
      color: '#009e4f',
      bgColor: 'rgba(0, 158, 79, 0.1)',
      type: 'Registration',
      details: { 'First Name': 'Ahmad', 'Last Name': 'Al-Rashidi', 'Member': 'Kuwait', 'Position': 'Official Delegate', 'Person ID': '240418' },
    },
    {
      message: 'Skill list updated for WorldSkills Shanghai 2026',
      time: '5 hours ago',
      icon: 'pi pi-file-edit',
      color: '#0E779F',
      bgColor: 'rgba(14, 119, 159, 0.1)',
      type: 'Update',
      details: { 'Event': 'WorldSkills Shanghai 2026', 'Changed By': 'Admin', 'Skills Added': '3', 'Skills Removed': '0', 'Total Skills': '62' },
    },
    {
      message: 'Votes API response time degraded',
      time: '1 day ago',
      icon: 'pi pi-exclamation-triangle',
      color: '#f39200',
      bgColor: 'rgba(243, 146, 0, 0.1)',
      type: 'Alert',
      details: { 'Service': 'Votes API', 'Status': 'Degraded', 'Response Time': '1.2s (avg 200ms)', 'Since': '9 Apr 2026, 14:30 UTC', 'Affected Endpoints': '/votes, /polls' },
    },
    {
      message: 'Forum permissions updated for Lyon 2024',
      time: '2 days ago',
      icon: 'pi pi-shield',
      color: '#7a2182',
      bgColor: 'rgba(122, 33, 130, 0.1)',
      type: 'Permission',
      details: { 'Forum': 'WorldSkills Lyon 2024', 'Action': 'Role updated', 'Role': 'ForumOwner', 'Entity': 'WorldSkills International', 'Changed By': 'Waseem Sabjee' },
    },
  ];

  notifDialogVisible = signal(false);
  selectedNotif = signal<Notification | null>(null);

  openNotification(notif: Notification): void {
    this.selectedNotif.set(notif);
    this.notifDialogVisible.set(true);
  }

  getDetailEntries(details: Record<string, string>): [string, string][] {
    return Object.entries(details);
  }
}
