import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html',
  styleUrls: ['./tarefa-listar.component.css']
})
export class TarefaListarComponent {
  colunasTabela: string[] = [
    "terefaId",
    "titulo",
    "descricao",
    "criadoEm",
    "categoria",
    "categoriaId",
    "status",
    "alterar"
  ];
  tarefas: Tarefa[] = [];
  tarefaId: number = 0;
  titulo: string = "";
  descricao?: string = "";
  categoria?: Categoria;
  categoriaId?: number;
  status?: string = "";

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          console.table(tarefas);
          this.tarefas = tarefas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  alterar(tarefaId: number): void{

    let tarefa: Tarefa = {
      titulo: this.titulo!,
      descricao: this.descricao!,
      categoria: this.categoria!,
      categoriaId: this.categoriaId!,
      status: this.status!
    };
    this.client.patch<Tarefa>(`https://localhost:7015/api/tarefa/alterar/${tarefaId}`, tarefa)
    .subscribe({
      next: (tarefa) => {this.ngOnInit()}
      
      , error: (erro) => {console.log(erro)}
    })
  }
}
