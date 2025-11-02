import type { ValidationResult } from '../types/type';

const fullYearMonths = 12;

function setUserMonth(userMonthBirthday: number): ValidationResult {
	if (userMonthBirthday < 1 || userMonthBirthday > fullYearMonths) {
		return { success: false, message: 'Must be a valid Month' };
	}

	return { success: true, value: userMonthBirthday };
}

export { setUserMonth };
