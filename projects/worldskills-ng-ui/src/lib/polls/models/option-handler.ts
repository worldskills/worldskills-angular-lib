export interface OptionHandler {
  onOptionSelect(
    pollType: string,
    currentSelection: (number | string)[],
    newSelectedValue: number | string,
    selectionIndex: number
  ): (number | string)[];
}
