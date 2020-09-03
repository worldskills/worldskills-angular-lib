export interface OptionHandler {
    onOptionSelect(pollType: string, currentSelection: any[], newSelectedValue: any, selectionIndex: number): any[];
}
