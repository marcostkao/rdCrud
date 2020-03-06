import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Produto } from 'src/app/models/Produtos';
import { Grupo } from 'src/app/models/Grupo';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {
  @Input() grupoAtivo: Grupo;
  public produtos: Produto[] = [];
  public produtosAtivos: Produto[] = [];
  constructor(private http:HttpService) {

    this.http.getProduto( ).subscribe ( 
      data => { this.produtos = data;
        this.produtosAtivos = data;
    });
   }

   listarDoGrupo(id: number){
      if( id == 0){
        this.produtosAtivos = this.produtos;
      } else {
        this.produtosAtivos = this.produtos.filter(
          p => p.codGrupo == id 
        )
      }
   }

   
  ngOnInit(): void {
  }

}

