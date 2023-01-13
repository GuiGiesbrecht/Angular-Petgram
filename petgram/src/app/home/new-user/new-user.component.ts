import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { NewUser } from './new-user';
import { lowerCaseValidator } from './lowerCase.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      userName: ['', [lowerCaseValidator]],
      fullName: ['',[Validators.required, Validators.minLength(2)]],
      password: ['',[Validators.required, Validators.minLength(5)]],
    });
  }

  registerUser() {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }
}
