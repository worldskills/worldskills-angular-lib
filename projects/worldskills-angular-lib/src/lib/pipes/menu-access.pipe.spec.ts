import { MenuAccessPipe } from './menu-access.pipe';

describe('Pipe: MenuAccess', () => {
  let pipe: MenuAccessPipe;

  const menuItems = [
    // TODO: requiredRoles by rolename and application code
    { label: 'Home', url: '/', hidden: false, requireLogin: false, requiredRoles: [] },
    { label: 'Other', url: '/', hidden: false, requireLogin: true, requiredRoles: [2, 4, 6] },
    { label: 'Hidden', url: '/', hidden: true, requireLogin: false, requiredRoles: [] }
  ];

  beforeEach(() => {
    pipe = new MenuAccessPipe();
  });

  it('User Logged In and Has Roles', () => {
    const expected = [
      { label: 'Home', url: '/', hidden: false, requireLogin: false, requiredRoles: [] },
      { label: 'Other', url: '/', hidden: false, requireLogin: true, requiredRoles: [2, 4, 6] },
    ];
    const result = pipe.transform(menuItems, true, [2, 4, 6]);
    expect(result === expected);
  });

  it('User Logged In and Has no Roles', () => {
    const expected = [
      { label: 'Home', url: '/', hidden: false, requireLogin: false, requiredRoles: [] }
    ];
    const result = pipe.transform(menuItems, true, []);
    expect(result === expected);
  });

  it('User not Logged In and Has Roles', () => {
    const expected = [
      { label: 'Home', url: '/', hidden: false, requireLogin: false, requiredRoles: [] }
    ];
    const result = pipe.transform(menuItems, false, [2, 4, 6]);
    expect(result === expected);
  });

  it('Undefined Menu Items', () => {
    const result = pipe.transform([undefined], false, [2, 4, 6]);
    expect(result === []);
  });

  it('null Menu Items', () => {
    const result = pipe.transform(null, false, [2, 4, 6]);
    expect(result === []);
  });
});

