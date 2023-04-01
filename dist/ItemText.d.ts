import { Section } from "./Section";
export declare class ItemText {
    raw: string;
    sections: Section[];
    constructor(itemtext: string);
    findSectionIndex(pattern: RegExp): number | undefined;
    getSection(index: number): Section | undefined;
    getLineInSection(lineIdx: number, sectionIdx: number): string | undefined;
    protected static prepareText(text: string): string;
    protected static getSections(text: string): Section[];
}
