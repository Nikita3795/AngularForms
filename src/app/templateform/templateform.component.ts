import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {

  title = 'angularforms';
  form = {
    username :'',
    email : '',
    password:''
  }

  onSubmit()
  {
    console.log(this.form)
  }
}
