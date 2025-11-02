/* eslint-disable no-shadow */
import { calculateAgeDifference } from '../CalculatorCore/calculateAgeDifference';
import { updateAgeDisplay } from '../CalculatorUI/updateAgeDisplay';
import { validationInputs } from '../ValidateCore/validationInputs';

const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
function handleFormSubmit(event: Event): void {
	event.preventDefault();

	if (!yearInput || !monthInput || !dayInput) {
		console.error('Input elements not found');

		return;
	}

	const validatedData = validationInputs();

	if (!validatedData) {
		return;
	}

	const birthDate = new Date(validatedData.yearValue, validatedData.monthValue - 1, validatedData.dayValue);

	const currentDate = new Date();

	if (birthDate > currentDate) {
		console.error('Birth date cannot be in the future');

		return;
	}

	const age = calculateAgeDifference(birthDate);
	updateAgeDisplay(age);
}

export { handleFormSubmit };

