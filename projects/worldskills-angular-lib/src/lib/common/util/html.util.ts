export class HtmlUtil {
    static txt(html: string): string {
        const result = String(html).replace(/<[^>]+>/gm, '');
        return result;
    }

}
