import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { NewUser } from './new-user';
import { lowerCaseValidator } from './lowerCase.validator';
import { UserExistsService } from './user-exists.service';
import { userPasswordEqualsValidator } from './user-password-equals.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        userName: [
          '',
          [lowerCaseValidator],
          [this.userExistsService.userAlreadyExists()],
        ],
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validator: [userPasswordEqualsValidator],
      }
    );
  }

  registerUser() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe({
        next: () => this.router.navigate(['']),
        error: (err) => console.log(err),
      });
    }
  }
}
