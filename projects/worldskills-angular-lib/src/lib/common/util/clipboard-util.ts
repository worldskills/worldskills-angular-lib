/**
 * Utility class for clipboard operations with modern browser support and fallbacks
 */
export class ClipboardUtil {
  /**
   * Copies text to clipboard using modern Clipboard API with fallback
   * @param value - The text to copy to clipboard
   * @returns Promise that resolves to true if successful, false otherwise
   */
  public static async copyTextToClipboard(value: string): Promise<boolean> {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        return true;
      } else {
        // Fallback to deprecated method for older browsers
        return this.fallbackCopyTextToClipboard(value);
      }
    } catch (error) {
      console.warn('Failed to copy text to clipboard:', error);
      // Try fallback method if modern API fails
      return this.fallbackCopyTextToClipboard(value);
    }
  }

  /**
   * Copies the content of an input element to clipboard
   * @param inputElement - The HTML input or textarea element to copy from
   * @returns Promise that resolves to true if successful, false otherwise
   */
  public static async copyInputToClipboard(inputElement: HTMLInputElement | HTMLTextAreaElement): Promise<boolean> {
    try {
      // First try to use the modern API with the input's value
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(inputElement.value);
        return true;
      } else {
        // Fallback method for older browsers
        return this.fallbackCopyInputToClipboard(inputElement);
      }
    } catch (error) {
      console.warn('Failed to copy input content to clipboard:', error);
      // Try fallback method if modern API fails
      return this.fallbackCopyInputToClipboard(inputElement);
    }
  }

  /**
   * Fallback method for copying text to clipboard using deprecated execCommand
   * @param value - The text to copy
   * @returns boolean indicating success
   */
  private static fallbackCopyTextToClipboard(value: string): boolean {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      
      // Styling to make it invisible and accessible
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.style.width = '0';
      textArea.style.height = '0';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      textArea.setAttribute('aria-hidden', 'true');
      
      document.body.appendChild(textArea);
      
      // Select and copy
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return successful;
    } catch (error) {
      console.error('Fallback copy method failed:', error);
      return false;
    }
  }

  /**
   * Fallback method for copying input content using deprecated execCommand
   * @param inputElement - The input element to copy from
   * @returns boolean indicating success
   */
  private static fallbackCopyInputToClipboard(inputElement: HTMLInputElement | HTMLTextAreaElement): boolean {
    try {
      const originalReadOnly = inputElement.readOnly;
      const originalSelection = {
        start: inputElement.selectionStart,
        end: inputElement.selectionEnd
      };
      
      // Temporarily make editable if readonly
      if (originalReadOnly) {
        inputElement.readOnly = false;
      }
      
      inputElement.focus();
      inputElement.select();
      inputElement.setSelectionRange(0, 99999); // For mobile devices
      
      const successful = document.execCommand('copy');
      
      // Restore original state
      inputElement.readOnly = originalReadOnly;
      if (originalSelection.start !== null && originalSelection.end !== null) {
        inputElement.setSelectionRange(originalSelection.start, originalSelection.end);
      } else {
        inputElement.setSelectionRange(0, 0);
      }
      
      return successful;
    } catch (error) {
      console.error('Fallback input copy method failed:', error);
      return false;
    }
  }

  /**
   * Checks if the Clipboard API is available in the current environment
   * @returns boolean indicating if modern clipboard API is supported
   */
  public static isClipboardAPISupported(): boolean {
    return !!(navigator.clipboard && window.isSecureContext);
  }
}
