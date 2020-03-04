import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']

})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];
  constructor() {
    this.grupos.push(
      new Grupo(1, "teste1"),
      new Grupo(2, "teste2"),
      new Grupo(3, "teste3")
      )
  }



  ngOnInit(): void {
  }

}
