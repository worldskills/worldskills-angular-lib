const FILE_ICON_MAP: Record<string, string> = {
  pdf:  'pi pi-file-pdf',
  jpg:  'pi pi-image',
  jpeg: 'pi pi-image',
  png:  'pi pi-image',
  gif:  'pi pi-image',
  bmp:  'pi pi-image',
  webp: 'pi pi-image',
  doc:  'pi pi-file-word',
  docx: 'pi pi-file-word',
  xls:  'pi pi-file-excel',
  xlsx: 'pi pi-file-excel',
  zip:  'pi pi-box',
  rar:  'pi pi-box',
  '7z': 'pi pi-box',
  mp4:  'pi pi-video',
  mov:  'pi pi-video',
  avi:  'pi pi-video',
};

export class FileUtil {
  /** Returns a PrimeNG icon class for the given filename or extension. */
  static getFileIcon(filenameOrExt: string): string {
    const ext = filenameOrExt.includes('.')
      ? filenameOrExt.split('.').pop()?.toLowerCase() ?? ''
      : filenameOrExt.toLowerCase();
    return FILE_ICON_MAP[ext] ?? 'pi pi-file';
  }
}
