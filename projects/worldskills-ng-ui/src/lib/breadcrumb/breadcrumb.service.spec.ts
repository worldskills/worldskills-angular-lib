import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';

@Component({ template: '' })
class PageComponent {}

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;

  const crumbs = () => firstValueFrom(service.breadcrumbs$);
  const labels = (list: Breadcrumb[]) => list.map(c => c.label);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          {
            path: 'members',
            data: { breadcrumb: 'Members' },
            children: [
              {
                path: ':id',
                data: { breadcrumb: { key: 'member', label: 'Member' } },
                children: [
                  { path: 'contacts', component: PageComponent, data: { breadcrumb: 'Contacts' } },
                ],
              },
            ],
          },
        ]),
      ],
    });
    service = TestBed.inject(BreadcrumbService);
    await TestBed.inject(Router).navigateByUrl('/members/12/contacts');
  });

  it('builds the crumbs from the route', async () => {
    expect(labels(await crumbs())).toEqual(['Members', 'Member', 'Contacts']);
  });

  it('replaces the crumbs up to the trail key and keeps the later ones', async () => {
    service.setTrail({}, {
      replaces: 'member',
      crumbs: [
        { key: 'via-1', label: 'WSI', url: '/member/1' },
        { key: 'member', label: 'Austria', url: '/members/12?via=1' },
      ],
    });

    expect(labels(await crumbs())).toEqual(['WSI', 'Austria', 'Contacts']);
  });

  it('ignores a trail whose key is not in the route', async () => {
    service.setTrail({}, { replaces: 'other', crumbs: [{ key: 'x', label: 'X', url: '/x' }] });

    expect(labels(await crumbs())).toEqual(['Members', 'Member', 'Contacts']);
  });

  it('only clears the trail of the page that set it', async () => {
    const first = {};
    const second = {};
    service.setTrail(first, { replaces: 'member', crumbs: [{ key: 'a', label: 'A', url: '/a' }] });
    service.setTrail(second, { replaces: 'member', crumbs: [{ key: 'b', label: 'B', url: '/b' }] });

    service.clearTrail(first);
    expect(labels(await crumbs())).toEqual(['B', 'Contacts']);

    service.clearTrail(second);
    expect(labels(await crumbs())).toEqual(['Members', 'Member', 'Contacts']);
  });
});
