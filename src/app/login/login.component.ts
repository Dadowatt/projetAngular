import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Validators.required
  // username= new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(20)])
  // password= new FormControl('', Validators.required,)

  FormGroup = new FormGroup({
    username : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password : new FormControl('',[Validators.required])
  })

  OnSubmit(Event:Event){
    Event.preventDefault()
    console.log(this.FormGroup.value);
    
  }
}
