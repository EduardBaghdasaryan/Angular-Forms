import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerForm = new FormGroup({
   firstName :new FormControl("",[Validators.required]),
   lastName :new FormControl("",[Validators.required]),
   email :new FormControl("",[Validators.required,Validators.email]),
   password :new FormControl("",[Validators.required,Validators.minLength(6)])
 }) 

 showSpinner = false
  constructor() { }

  ngOnInit(): void {}

loadData() {
  this.showSpinner = true
  setTimeout(()=>{
    this.showSpinner=false
  },3000)
}
}
