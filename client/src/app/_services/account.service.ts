import { HttpClient } from '@angular/common/http';
import { inject, Injectable, model, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  currentUser = signal<User | null>(null);

  login(model: any) {
    console.log('entered into the login in the accountserivce.ts and the user is set in local storage');
    return this.http.post<User>(this.baseUrl + 'account/login', model)
      .pipe(
        map(user => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser.set(user);
          }
        })
      )
  }

  logout() {
    console.log('entered into the logout in the logout in the accountserivce.ts component and the user is removed in local storage');
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
  
}
