import type { AgeDifference } from '@src/features/types/type';

const yearDisplay = document.getElementById('year-output');
const dayDisplay = document.getElementById('day-output');
const monthDisplay = document.getElementById('month-output');
function updateAgeDisplay(age: AgeDifference): void {
	if (!yearDisplay || !monthDisplay || !dayDisplay) {
		console.error('Display elements not found');

		return;
	}

	yearDisplay.textContent = age.years.toString();
	monthDisplay.textContent = age.months.toString();
	dayDisplay.textContent = age.days.toString();
}

export { updateAgeDisplay };

