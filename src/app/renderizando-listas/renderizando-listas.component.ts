import { Component } from '@angular/core';
import { celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
    celulares: celular[]=[
      {id: 1, nome: "celular XL", descricao: "um celular grande",esgotado: false},
      {id: 1, nome: "celular Normal",esgotado: false},
      {id: 2, nome: "celular mini", descricao: "um celular pequeno",esgotado: true}
    ]
}
