import { Injectable } from '@angular/core';

const key = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  returnToken() {
    return localStorage.getItem(key) ?? '';
  }

  saveToken(token: string) {
    localStorage.setItem(key, token);
  }

  removeToken() {
    localStorage.removeItem(key);
  }

  hasToken() {
    return !!this.returnToken();
  }
}
