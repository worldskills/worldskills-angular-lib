import { Option } from './option';
export interface Track {
 personId: number;
 firstName: string;
 lastName: string;
 option: Option;
 weight: number;
 timestamp: Date;
}
