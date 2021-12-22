import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { MenuService } from 'src/app/services/menu.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users=[
    {
      "usuario":"aragon",
      "nombre":"Alejandro",
      "apellido":"Aragón",
      "password":"ar12345",
      "sexo":"Masculino"
    },
    {
      "usuario":"interiano",
      "nombre":"Felipe",
      "apellido":"Interiano",
      "password":"in12345",
      "sexo":"Masculino"
    },
    {
      "usuario":"paopo",
      "nombre":"Paola",
      "apellido":"Posada",
      "password":"pa12345",
      "sexo":"Femenino"
    },
    {
      "usuario":"momo",
      "nombre":"Monica",
      "apellido":"Villalta",
      "password":"mo12345",
      "sexo":"Femenino"
    },
    {
      "usuario":"romel",
      "nombre":"Rocio",
      "apellido":"Arevalo",
      "password":"ro12345",
      "sexo":"Femenino"
    }
  ]

  constructor(private service:MenuService) { }

  ngOnInit(): void {
    //this.cargarUsuarios()
  }

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource(this.users)

  // cargarUsuarios(){
  //   this.service.getUsuarios().subscribe((data:any)=>{
  //     this.users = data
  //   })
  // }

  applyFilter(e:Event){
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
