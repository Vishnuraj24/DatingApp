import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive,TitleCasePipe,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model: any = {};
  // private accountservice = inject(AccountService);
  accountservice = inject(AccountService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  // loggedIn = false;

  login() {
    console.log('entered into the login  in the nav component');
    this.accountservice.login(this.model).subscribe({
      next: (response: any) => {
        // this.loggedIn = true;
        console.log(response);

        this.router.navigateByUrl('/members')
      },
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.error);
      },
      complete: () => { console.log('login Request has been complete') }
    });
  }

  // logout functionality
  logout(){
    // this.loggedIn = false;
    console.log('entered into the logout in the nav component');
    this.accountservice.logout();
    this.router.navigateByUrl('/');
    console.log('logout completed');
  }
}
