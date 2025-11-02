import { handleFormSubmit } from './features/Form/handleFormSubmit';

const calculatorForm = document.getElementById('calulator__form');
const yearDisplay = document.getElementById('year-output');
const dayDisplay = document.getElementById('day-output');
const monthDisplay = document.getElementById('month-output');

function initializeApp(): void {
	if (!calculatorForm || !yearDisplay || !monthDisplay || !dayDisplay) {
		console.error('Calculator form not found');

		return;
	}

	calculatorForm.addEventListener('submit', handleFormSubmit);
}

initializeApp();
