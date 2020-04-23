import { Injectable } from '@angular/core';




const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE = 'ROLE_MODERATOR';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRole(role: string) {
    window.sessionStorage.removeItem(ROLE);
    window.sessionStorage.setItem(ROLE, role);
  }

  public getRole(): string {
    return sessionStorage.getItem(ROLE);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}