import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  myform = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get uname() {
    return this.myform.get('uname');
  }

  get email() {
    return this.myform.get('email');
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log(this.myform.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
