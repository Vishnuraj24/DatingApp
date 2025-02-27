import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 
  private accountservice = inject(AccountService);
  title = 'Dating-App';


  ngOnInit(): void {
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
 

}

