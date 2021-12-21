import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  loading=false;

  horizontal:MatSnackBarHorizontalPosition='center';
  vertical:MatSnackBarVerticalPosition='top';

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) {
    this.form = fb.group({
      usuario:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(4)]]
    });
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log("Formulario ===",this.form.value);

    if (this.form.value.usuario=="aragon" && this.form.value.password=="admin1234" ) {
      this.error('Login correcto');
      this.fakeLoading();
    } else if(this.form.value.usuario !=='aragon'){
      this.error('Usuario incorrecto')
      this.form.reset();
    }else if(this.form.value.password !=='admin1234'){
      this.error('Password incorrecto')
      this.form.reset();
    }

  }

  error(mensaje:string){
    this._snackBar.open(mensaje,'',{
      duration:5*1000,
      horizontalPosition:this.horizontal,
      verticalPosition:this.vertical
    });
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
    },1500);
  }

}
