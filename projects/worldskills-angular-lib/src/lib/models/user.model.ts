import { RoleModel } from './role-model';
import { LinkModel } from './link-model';
import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject(UserModel)
export class UserModel {
  @JsonProperty('id', Number)
  id: number;

  @JsonProperty('person_id', Number)
  personId: number;

  @JsonProperty('legacy_id', Number)
  legacyId: number;

  @JsonProperty('first_name', String)
  firstName: string;

  @JsonProperty('last_name', String)
  lastName: string;

  @JsonProperty('puppeteer', Any)
  puppeteer: any;

  @JsonProperty('username', String)
  username: string;

  @JsonProperty('email_addresses', [String])
  emailAddresses: string[];

  @JsonProperty('roles', [RoleModel])
  roles: RoleModel[];

  @JsonProperty('user_profiles', Any)
  userProfiles: any;

  @JsonProperty('active', Boolean)
  active: boolean;

  @JsonProperty('links', [LinkModel])
  links: LinkModel[];

  @JsonProperty('password', Any)
  password: any;

  @JsonProperty('pin', Any)
  pin: any;

  @JsonProperty('has_pin', Boolean)
  hasPin: boolean;

  get fullname() {
    return this.firstName + ' ' + this.lastName;
  }

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || 0;
    this.personId = obj && Number(obj.personId) || 0;
    this.legacyId = obj && Number(obj.legacyId) || 0;
    this.firstName = obj && obj.firstName || '';
    this.lastName = obj && obj.lastName || '';
    this.puppeteer = obj && obj.puppeteer || null;
    this.username = obj && obj.username;
    this.emailAddresses = obj && obj.emailAddresses || [];
    this.roles = obj && obj.roles || [];
    this.userProfiles = obj && obj.user_profiles && null;
    this.active = obj && obj.active || false;
    this.links = obj && obj.link || [];
    this.password = obj && obj.password || null;
    this.pin = obj && obj.pin || null;
    this.hasPin = obj && obj.hasPin || false;
  }
}
