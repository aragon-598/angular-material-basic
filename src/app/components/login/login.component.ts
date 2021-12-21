import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      usuario:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(4)]]
    });
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log("Formulario ===",this.form.value);

  }

}
