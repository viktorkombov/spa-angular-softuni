import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { linkValidator } from './validators';

@Directive({
  selector: '[ngModel][appLinkValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: LinkValidatorDirective
    }
  ]
})
export class LinkValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return linkValidator(control);
  }

}
