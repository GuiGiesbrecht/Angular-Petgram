import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/signup', newUser);
  }
}
