export declare class Section {
    text: string;
    lines: string[];
    constructor(text: string);
    getLine(index: number): string | undefined;
    /**
     * Removes trailing and leading newlines
     *
     * @param text
     * @returns
     */
    protected static prepareText(text: string): string;
    protected static getLines(text: string): string[];
}
