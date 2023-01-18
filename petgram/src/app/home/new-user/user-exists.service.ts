import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { switchMap, map, first } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private newUserService: NewUserService) {}

  userAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.checkUserName(userName)),
        map((userExists) => (userExists ? { userAlreadyExists: true } : null)),
        first()
      );
    };
  }
}
