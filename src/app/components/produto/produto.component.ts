import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }


  ngOnInit(): void {
  }

}
