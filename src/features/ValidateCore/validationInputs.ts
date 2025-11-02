import { setUserDay } from '@src/features/DateRules/dayRules';
import { setUserMonth } from '@src/features/DateRules/monthRules';
import { setUserYear } from '@src/features/DateRules/yearRules';
import { resetDate } from '@src/features/Form/resetForm';
import { isValidationSuccess } from '../ValidateUI/isValidateSuccess';

interface DateType {
	yearValue: number,
	monthValue: number,
	dayValue: number,
}

const yearInput = document.getElementById('year') as null | HTMLInputElement;
const monthInput = document.getElementById('month') as null | HTMLInputElement;
const dayInput = document.getElementById('day') as null | HTMLInputElement;
const dayError = document.querySelector('[data-day-error]');
const monthError = document.querySelector('[data-month-error]');
const yearError = document.querySelector('[data-year-error]');
function validationInputs(): null | DateType {
	if (!yearInput || !monthInput || !dayInput) {
		console.error('Input elements not found');

		return null;
	}

	resetDate();
	const yearValue = Number(yearInput.value);
	const monthValue = Number(monthInput.value);
	const dayValue = Number(dayInput.value);

	const validatedYear = setUserYear(yearValue);
	const validatedMonth = setUserMonth(monthValue);
	const validatedDay = setUserDay(dayValue, monthValue, yearValue);

	if (!isValidationSuccess(validatedDay) || !isValidationSuccess(validatedYear) || !isValidationSuccess(validatedMonth)) {
		console.error('invalid Date');

		if (!validatedDay.success && dayError) {
			dayError.textContent = validatedDay.message;
		}

		if (!validatedMonth.success && monthError) {
			monthError.textContent = validatedMonth.message;
		}

		if (!validatedYear.success && yearError) {
			yearError.textContent = validatedYear.message;
		}

		return null;
	}

	return {
		yearValue: validatedYear.value,
		monthValue: validatedMonth.value,
		dayValue: validatedDay.value,
	};
}

export { validationInputs };
