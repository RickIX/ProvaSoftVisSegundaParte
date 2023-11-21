import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-tarefa-cadastrar',
  templateUrl: './tarefa-cadastrar.component.html',
  styleUrls: ['./tarefa-cadastrar.component.css']
})
export class TarefaCadastrarComponent {
  titulo: string = "";
  descricao?: string = "";
  categoria?: Categoria;
  categoriaId?: number;
  status?: string = "";

  constructor(
    private client: HttpClient,
  ) {}

  cadastrar(): void{
    let tarefa: Tarefa = {
      titulo: this.titulo,
      descricao: this.descricao,
      categoria: this.categoria,
      categoriaId: this.categoriaId,
      
    };
    this.client.post<Tarefa>("https://localhost:7015/api/tarefa/cadastrar", tarefa)
    .subscribe({
      next: (despesa) => {}, error: (erro) => {console.log(erro)}
    })
  }
}
