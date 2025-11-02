const dayError = document.querySelector('[data-day-error]');
const monthError = document.querySelector('[data-month-error]');
const yearError = document.querySelector('[data-year-error]');
const yearDisplay = document.getElementById('year-output');
const dayDisplay = document.getElementById('day-output');
const monthDisplay = document.getElementById('month-output');
function resetDate() {
	if (dayError) dayError.textContent = '';
	if (monthError) monthError.textContent = '';
	if (yearError) yearError.textContent = '';
	if (yearDisplay) yearDisplay.textContent = '--';
	if (monthDisplay) monthDisplay.textContent = '--';
	if (dayDisplay) dayDisplay.textContent = '--';
}

export { resetDate };
