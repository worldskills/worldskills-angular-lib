export class HtmlUtil {
    static txt(html: string): string {
        return String(html).replace(/<[^>]+>/gm, '');
    }

}
