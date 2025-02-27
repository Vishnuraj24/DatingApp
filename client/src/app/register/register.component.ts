import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // @Input() usersFromHomeomponent: any;  --angular 17.x below
  // angular 18.x above
  usersFromHomeComponent = input.required<any>();  
  // @Output() cancelRegister = new EventEmitter(); --angular 17.x below
  //angular 18.x above
  cancelRegister = output<boolean>();
  model: any = {}
  register() {
    console.log(this.model);
  }
  cancel() {
    console.log('Cancelled');
    this.cancelRegister.emit(false);
  }

}
