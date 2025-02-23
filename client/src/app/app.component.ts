import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  private accountservice = inject(AccountService);
  title = 'Dating-App';
  users: any;

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    console.log('entered into the setcurrentuser method in app component');
    const userString = localStorage.getItem('user');
    if (!userString) {
      console.log('user is not present in the local string');
      return;
    }
    const user = JSON.parse(userString);
    this.accountservice.currentUser.set(user);
  }
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response: any) => { this.users = response },
      error: (error: any) => {console.log(error)},
      complete: () => { console.log('Request has been complete') }
    })
  }

}

