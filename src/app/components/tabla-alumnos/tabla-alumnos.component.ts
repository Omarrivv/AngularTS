import { Component, OnInit } from '@angular/core';
import { alumnos } from './mook';
import { CommonModule } from '@angular/common'; 
import { Alumno } from '../../models/alumno-to';
@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {
  public alumnos?: Alumno[];
  ngOnInit(): void {
    this.alumnos = alumnos;
  }
}
