import type { ValidationResult } from '../types/type';

import { getYear } from 'date-fns';

function setUserYear(userYearBirthday: number): ValidationResult {
	const yearRegex = /^[1-9]\d{3}$/;
	const currentYear = getYear(new Date());

	if (userYearBirthday > currentYear || !yearRegex.test(userYearBirthday.toString())) {
		return { success: false, message: 'Enter a valid Year' };
	}

	return { success: true, value: userYearBirthday };
}

export { setUserYear };
