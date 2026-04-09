import { OptionHandler } from './option-handler';

export class DefaultOptionHandler implements OptionHandler {
  onOptionSelect(
    pollType: string,
    currentSelection: (number | string)[],
    newSelectedValue: number | string,
    selectionIndex: number
  ): (number | string)[] {
    if (pollType === 'standard') {
      return [newSelectedValue];
    }
    if (newSelectedValue !== '0' && newSelectedValue !== 0) {
      currentSelection.forEach((model, idx) => {
        if (idx === selectionIndex) {
          currentSelection[idx] = newSelectedValue;
        } else if (model === newSelectedValue || String(model) === String(newSelectedValue)) {
          currentSelection[idx] = '0';
        }
      });
    }
    return currentSelection;
  }
}
