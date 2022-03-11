export function minLenghtValidation(inputData, minLength) {
	const { value } = inputData;

	removeClassErrorSuccess(inputData);

	if (value.length >= minLength) {
		inputData.classList.add("success");
		return true;
	} else {
		inputData.classList.add("error");
		return false;
	}
}

function removeClassErrorSuccess(inputData) {
	inputData.classList.remove("success");
	inputData.classList.remove("error");
}
