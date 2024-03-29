import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.hasToken()){
      this.decodeJWTToken();
    }
  }

  private decodeJWTToken(){
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  saveToken(token: string){
    this.tokenService.saveToken(token);
    this.decodeJWTToken();
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next({});
  }

  isLogged(){
    return this.tokenService.hasToken();
  }
}
