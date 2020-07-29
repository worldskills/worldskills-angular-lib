import { Role } from './role';

export interface User {
  id: number;
  person_id: number;
  legacy_id: number;
  first_name: string;
  last_name: string;
  puppeteer: any;
  username: string;
  email_addresses: string[];
  roles: Role[];
  user_profiles: any;
  active: boolean;
  password: any;
  pin: any;
  has_pin: boolean;
}
