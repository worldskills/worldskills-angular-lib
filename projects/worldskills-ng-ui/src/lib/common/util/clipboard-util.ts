export class ClipboardUtil {

  static async copyTextToClipboard(value: string): Promise<boolean> {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        // fall through to execCommand fallback
      }
    }
    return ClipboardUtil.execCommandFallback(value);
  }

  static async copyInputToClipboard(input: HTMLInputElement | HTMLTextAreaElement): Promise<boolean> {
    return ClipboardUtil.copyTextToClipboard(input.value);
  }

  static isClipboardAPISupported(): boolean {
    return !!(navigator.clipboard && window.isSecureContext);
  }

  private static execCommandFallback(value: string): boolean {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.cssText = 'position:fixed;left:-999999px;top:-999999px;opacity:0';
      textarea.setAttribute('readonly', '');
      textarea.setAttribute('aria-hidden', 'true');
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  }
}
