import { Option } from './option';
import { Abstain } from './abstain';
import { PersonPosition } from './person-position';
export interface Track {
 personId: number;
 firstName: string;
 lastName: string;
 option: Option;
 weight: number;
 timestamp: Date;
 abstain?: Abstain;
 imagePath?: string;
 relativePosition: PersonPosition;
 positions: PersonPosition[];
 voteIndex: number;
}
