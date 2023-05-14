import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "joão";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/FB_IMG_1493083203098.jpg";
  
  mostrarDataNascimento() {
    alert('11/09/1999')
    }
  }
