export const sortAlphaNumerically = (a: string | number, b: string | number) => {
	return String(a).localeCompare(String(b), "en", { numeric: true });
};

export const sortAlphaNumericallyInObjects = <T, K extends keyof T>(a: T, b: T, prop: K) => {
	return String(a[prop]).localeCompare(String(b[prop]), "en", { numeric: true });
};
