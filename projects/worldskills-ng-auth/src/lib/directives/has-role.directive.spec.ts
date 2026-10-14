import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { HasRoleDirective } from './has-role.directive';
import { NgAuthService } from '../services/ng-auth.service';
import { User } from '../models/user';
import { Role } from '../models/role';

function user(...names: string[]): User {
  return {
    roles: names.map(name => ({
      name,
      role_application: { application_code: 800 },
      apply_per_entity: false,
    }) as unknown as Role),
  } as User;
}

@Component({
  imports: [HasRoleDirective],
  template: `
    <span id="any" *wsHasRole="roles(); appCode: 800">any</span>
    <span id="negate" *wsHasRole="'Admin'; appCode: 800; negate: true">negate</span>
  `,
})
class HostComponent {
  roles = signal<string | string[]>(['Admin', 'EditMember']);
}

describe('HasRoleDirective', () => {
  let currentUser$: BehaviorSubject<User | null>;

  beforeEach(() => {
    currentUser$ = new BehaviorSubject<User | null>(null);
    TestBed.configureTestingModule({
      providers: [{ provide: NgAuthService, useValue: { currentUser$ } }],
    });
  });

  function render() {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const query = (id: string) => fixture.nativeElement.querySelector(`#${id}`);
    return { fixture, query };
  }

  it('hides content when there is no user', () => {
    const { query } = render();
    expect(query('any')).toBeNull();
    expect(query('negate')).not.toBeNull();
  });

  it('shows content when the user has one of the roles', () => {
    currentUser$.next(user('EditMember'));
    const { query } = render();
    expect(query('any')).not.toBeNull();
    expect(query('negate')).not.toBeNull();
  });

  it('updates when the user changes', () => {
    currentUser$.next(user('Admin'));
    const { fixture, query } = render();
    expect(query('any')).not.toBeNull();
    expect(query('negate')).toBeNull();

    currentUser$.next(user('Browse'));
    fixture.detectChanges();
    expect(query('any')).toBeNull();
    expect(query('negate')).not.toBeNull();
  });

  it('updates when the roles input changes', () => {
    currentUser$.next(user('Browse'));
    const { fixture, query } = render();
    expect(query('any')).toBeNull();

    fixture.componentInstance.roles.set('Browse');
    fixture.detectChanges();
    expect(query('any')).not.toBeNull();
  });
});
