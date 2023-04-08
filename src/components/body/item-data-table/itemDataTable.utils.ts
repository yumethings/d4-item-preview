import {
	replaceSubString,
	removeCharactersBetweenCurlyBrackets,
	replaceStaticValueTwo,
	replaceStaticValueOne,
	replaceStaticValueZero,
	removePipesAroundNumbers,
	removePipesAroundPercent,
	VariableKeys,
} from "../../../utilities/stringUtilities";

export const processValue = (value: string | number) => {
	return replaceSubString(
		replaceSubString(
			removeCharactersBetweenCurlyBrackets(
				replaceStaticValueTwo(replaceStaticValueOne(replaceStaticValueZero(String(value)))),
			),
			/FloatRandomRangeWithInterval\(\d+, /g,
			"(",
		),
		",",
		" - ",
	);
};

export const processDescription = (description: string) => {
	return replaceStaticValueTwo(
		replaceStaticValueOne(replaceStaticValueZero(removeCharactersBetweenCurlyBrackets(description))),
	);
};

export const replaceKeyWithValue = (description: string, currentKeys: VariableKeys[], valueArray: string[]) => {
	let result = description;
	currentKeys.forEach((key, idx) => {
		result = replaceSubString(result, key, valueArray[idx]);
	});
	return result;
};

export const formatHeader = (key: string) => {
	return key.replace(key.charAt(0), key.charAt(0).toUpperCase());
};

export const formatDescription = (description: string) => {
	return removePipesAroundNumbers(
		removePipesAroundPercent(
			removeCharactersBetweenCurlyBrackets(description)
				.replaceAll("[", "")
				.replaceAll("]", "")
				.replace(/Round\(/g, "")
				.replace(/\)\)/g, ")")
				.replace(/RandomInt\((.*?)\)/g, "($1)"),
		),
	);
};
