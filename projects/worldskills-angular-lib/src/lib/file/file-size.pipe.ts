import { Pipe, PipeTransform } from '@angular/core';
import { formatBytes } from "./file";

@Pipe({
    name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

    transform(size: number, ...args: unknown[]): unknown {
        return size ? formatBytes(size) : '';
    }
}
