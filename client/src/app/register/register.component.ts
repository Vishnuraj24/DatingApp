import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // @Input() usersFromHomeomponent: any;  --angular 17.x below
  // angular 18.x above
  //usersFromHomeComponent = input.required<any>();  
  // @Output() cancelRegister = new EventEmitter(); --angular 17.x below
  //angular 18.x above
  cancelRegister = output<boolean>();
  model: any = {}
  accountservice = inject(AccountService);
  
  register() {
    this.accountservice.register(this.model).subscribe({
      next: (response: any) => {
        console.log(response);
        this.cancel();
      },
      error: (error: any) => {console.log(error)},
      complete: () => { console.log('Register Request has been complete') }
    })
  }
  cancel() {
    console.log('Cancelled');
    this.cancelRegister.emit(false);
  }

}
