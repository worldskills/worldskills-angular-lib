export enum WSIMediaType {
    XML = 'application/xml',
    JSON = 'application/json',
    PDF = 'application/pdf',
    VCF = 'text/vcard',
    XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ZIP = 'application/zip',
}

export function formatBytes(bytes, decimals = 2): string {
    if (bytes === 0) {
        return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function getFilenameExtension(filename: string): string {
    return filename.substr(filename.lastIndexOf('.') + 1);
}
