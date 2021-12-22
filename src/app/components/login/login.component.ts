import { Usuario } from './../../interfaces/usuario';
import { MenuService } from 'src/app/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  //usuario y lista de usuarios
  usuarios:Usuario[]=[];
  usuario:any;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,private router:Router,private service:MenuService) {
    this.form = fb.group({
      usuario:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(4)]]
    });
   }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  ingresar(){
    console.log("Formulario ===",this.form.value);
    this.usuario = this.usuarios.filter(user=>{
      if (user.usuario==this.form.value.usuario) {
        return user;
      }else{
        return null
      }
    })
    var user = this.usuario[0]


    if (user !=null && this.form.value.password==user.password ) {
      this.error('Bienvenido '+user.usuario);
      this.fakeLoading();
    } else if(user ==null){
      this.error('Usuario incorrecto')
      this.form.reset();
    }else if(this.form.value.password !==user.password){
      this.error('Password incorrecto')
      this.form.reset();
    }

  }

  error(mensaje:string){
    this._snackBar.open(mensaje,'',{
      duration:1.5*1000,
      horizontalPosition:this.horizontal,
      verticalPosition:this.vertical
    });
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
    },1500);
  }

  cargarUsuarios(){
    var user=null;
    this.service.getUsuarios().subscribe((data:any)=>{
      this.usuarios = data
    })

  }

}
