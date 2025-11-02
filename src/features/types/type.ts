interface ValidationSuccess {
	success: true,
	value: number,
}

interface ValidationError {
	success: false,
	message: string,
}

interface AgeDifference {
	years: number,
	months: number,
	days: number,
}
type ValidationResult = ValidationError | ValidationSuccess;

export type { AgeDifference, ValidationError, ValidationResult, ValidationSuccess };
