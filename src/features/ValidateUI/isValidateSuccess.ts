import type { ValidationResult, ValidationSuccess } from '@src/features/types/type';

function isValidationSuccess(result: ValidationResult): result is ValidationSuccess {
	return result.success;
}

export { isValidationSuccess };
