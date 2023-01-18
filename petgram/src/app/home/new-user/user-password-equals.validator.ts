import { FormGroup } from '@angular/forms';

export function userPasswordEqualsValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value ?? '';
  const passwordConfirmation = formGroup.get('userName')?.value ?? '';
  if (!password || !passwordConfirmation) {
    return null;
  }
  if (
    (password.trim() + passwordConfirmation.trim()) &&
    (password === passwordConfirmation)
  ) {
    return { passwordEquals: true };
  }
  return null;
}
