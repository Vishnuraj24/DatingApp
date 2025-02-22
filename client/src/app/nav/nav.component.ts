import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model: any = {};
  private accountservice = inject(AccountService);


  login() {
    console.log('entered into the login function');
    this.accountservice.login(this.model).subscribe({
      next: (response: any) => { console.log(response) },
      error: (error: any) => {console.log(error)},
      complete: () => { console.log('Request has been complete') }
    });
  }
}
