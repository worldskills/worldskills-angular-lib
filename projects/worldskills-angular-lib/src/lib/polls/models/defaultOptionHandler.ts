import { OptionHandler } from './optionHandler';
/*
    We will start moving to a handler approach over time as we cusstomize and improve the controls
*/
export class DefaultOptionHandler implements OptionHandler {
    onOptionSelect(pollType: string, currentSelection: any[], newSelectedValue: any, selectionIndex: number): any[] {
        if (pollType === 'standard') {
            return [newSelectedValue];
        } else {
            if (newSelectedValue !== '0') {
                currentSelection.forEach((model, idx) => {
                if (idx === selectionIndex) {
                    currentSelection[idx] = newSelectedValue;
                } else {
                    if (model === newSelectedValue) {
                    currentSelection[idx] = '0';
                    }
                }
                });
            }
            return currentSelection;
        }
    }
}
