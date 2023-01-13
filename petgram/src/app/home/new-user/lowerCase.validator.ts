import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control:AbstractControl) {
  const valor = control.value as string;
  if(valor !== valor.toLowerCase()) {
    return { lowerCase: true };
  }
  return null;
}
