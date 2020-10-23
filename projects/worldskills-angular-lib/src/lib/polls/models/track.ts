import { Option } from './option';
import { Abstain } from './abstain';
export interface Track {
 personId: number;
 firstName: string;
 lastName: string;
 option: Option;
 weight: number;
 timestamp: Date;
 abstain?: Abstain;
 imagePath?: string;
}
