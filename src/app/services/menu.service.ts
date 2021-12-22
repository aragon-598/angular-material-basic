import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getMenu():Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json');
  }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('./assets/data/usuarios.json');
  }
}
