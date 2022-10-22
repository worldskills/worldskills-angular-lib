export class OrdinalUtil {
    // standard suffix implementation
    public static applyDefault(i: number): string {
        const j = i % 10;
        const k = i % 100;

        if (i === 1 && k !== 11) {
            return i + 'st';
        }

        if (j === 2 && k !== 12) {
            return i + 'nd';
        }

        if (j === 3 && k !== 13) {
            return i + 'rd';
        }

        return i + 'th';
    }
}
