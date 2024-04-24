
import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true
})
export class ControlErrorMessagePipe implements PipeTransform {
  
  transform(control: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    console.log("," , control);
    if (control?.["required"]) {
      return "This field is required";
    }
    if (control?.['minlength']) {
      return "This field should be minimum 3 characters";
    }
    return "Invalid input";
  }
}