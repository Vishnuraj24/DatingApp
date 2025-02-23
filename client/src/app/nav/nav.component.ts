import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model: any = {};
  // private accountservice = inject(AccountService);
  accountservice = inject(AccountService);
  // loggedIn = false;

  login() {
    console.log('entered into the login  in the nav component');
    this.accountservice.login(this.model).subscribe({
      next: (response: any) => {
        // this.loggedIn = true;
        console.log(response);
      },
      error: (error: any) => {console.log(error)},
      complete: () => { console.log('login Request has been complete') }
    });
  }

  // logout functionality
  logout(){
    // this.loggedIn = false;
    console.log('entered into the logout in the nav component');
    this.accountservice.logout();
    console.log('logout completed');
  }
}
