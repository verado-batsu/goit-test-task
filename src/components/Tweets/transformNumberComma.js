export function transformNumberComma(number) {
	const stringNumber = number.toString();
	if (stringNumber.length > 3) {
		const endString = stringNumber.slice(stringNumber.length - 3)
		const startString = transformNumberComma(stringNumber.slice(0, stringNumber.length - 3))
		return `${startString},${endString}`
	} else {
		return stringNumber;
	}
}