import type { ValidationResult } from '../types/type';

import { lastDayOfMonth } from 'date-fns';

function setUserDay(userDayBirthday: number, year: number, month: number): ValidationResult {
	const date = new Date(year, month - 1, 1);
	const lastDay = lastDayOfMonth(date);
	const upperLimit = lastDay.getDate();

	if (userDayBirthday > upperLimit) {
		return { success: false, message: 'Enter a Valid Month' };
	}

	return { success: true, value: userDayBirthday };
}

export { setUserDay };
