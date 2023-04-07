export const replaceUnderscores = (string: string) => string.replaceAll("_", " ");
export const removeCharactersBetweenCurlyBrackets = (string: string) => string.replaceAll(/\{(.*?)\}/g, "");
export const replaceStaticValueZero = (string: string) => string.replaceAll(/Affix."Static Value 0"/g, "x");
export const replaceStaticValueOne = (string: string) => string.replaceAll(/Affix."Static Value 1"/g, "y");
export const replaceStaticValueTwo = (string: string) => string.replaceAll(/Affix."Static Value 2"/g, "z");
export const replaceSubString = (string: string, subString: string | RegExp, newString: string) =>
	string.replaceAll(subString, newString);
export const removePipesAroundPercent = (string: string) => string.replaceAll(/\|[0-9]?.*?%.*?\|/g, "%");
export const removePipesAroundNumbers = (string: string) => string.replaceAll(/\|[0-9]?[0-9].*?\|/g, "");

export type VariableKeys =
	| "Affix_Flat_Value_1"
	| "Affix_Flat_Value_2"
	| "Affix_Value_1"
	| "Affix_Value_2"
	| `Affix."Static Value 0"`
	| `Affix."Static Value 1"`
	| `Affix."Static Value 2"`;

export const variableKeys: VariableKeys[] = [
	"Affix_Flat_Value_1",
	"Affix_Flat_Value_2",
	"Affix_Value_1",
	"Affix_Value_2",
	// `Affix."Static Value 0"`,
	// `Affix."Static Value 1"`,
	// `Affix."Static Value 2"`,
];
