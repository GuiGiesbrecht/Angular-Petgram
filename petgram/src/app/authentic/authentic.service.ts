import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authentic(email: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName: email,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res: HttpResponse<any>) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
