import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  http = inject(HttpClient);
  registermode = false;
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  registertoggle() {
    this.registermode = !this.registermode;
  }

  cancelRegisterMode(event: boolean) {
    this.registermode = event;
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response: any) => {
        this.users = response;
        console.log(this.users);
       },
      error: (error: any) => {console.log(error)},
      complete: () => { console.log('Request has been complete') }
    })
    
  }
  
}
