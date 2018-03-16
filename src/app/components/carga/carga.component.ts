import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../providers/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = [];

  constructor(public _CI: CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes() {
    this._CI.cargarImagenesFirebase(this.archivos);

  }

}
