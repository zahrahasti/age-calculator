import type { AgeDifference } from '../types/type';

import { addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

function calculateAgeDifference(birthDate: Date): AgeDifference {
	const currentDate = new Date();

	const years = differenceInYears(currentDate, birthDate);
	const afterYears = addYears(birthDate, years);

	const months = differenceInMonths(currentDate, afterYears);
	const afterMonths = addMonths(afterYears, months);

	const days = differenceInDays(currentDate, afterMonths);

	return { years, months, days };
}

export { calculateAgeDifference };
