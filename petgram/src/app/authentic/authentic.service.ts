import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticService {
  constructor(private httpClient: HttpClient) {}

  authentic(email: string, senha: string): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/api/usuarios/authentic',
      { userName: email, password: senha }
    );
  }
}
