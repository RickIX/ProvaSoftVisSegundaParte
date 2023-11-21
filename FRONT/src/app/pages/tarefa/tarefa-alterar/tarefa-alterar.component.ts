import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-tarefa-alterar',
  templateUrl: './tarefa-alterar.component.html',
  styleUrls: ['./tarefa-alterar.component.css']
})
export class TarefaAlterarComponent {
  colunasTabela: string[] = [
    "terefaId",
    "titulo",
    "descricao",
    "criadoEm",
    "categoria",
    "categoriaId",
    "status"
  ];

  titulo: string = "";
  descricao?: string = "";
  categoria?: Categoria;
  categoriaId?: number;
  status?: string = "";

  tarefas: Tarefa[] = [];

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
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

  alterar(): void{

    let tarefa: Tarefa = {
      titulo: this.titulo!,
      descricao: this.descricao!,
      categoria: this.categoria!,
      categoriaId: this.categoriaId!,
      status: this.status!
    };
    this.client.patch<Tarefa>("https://localhost:7015/api/tarefa/alterar", tarefa)
    .subscribe({
      next: (despesa) => {
        this.router.navigate(["pages/tarefa/tarefa-listar"]);
      }, error: (erro) => {console.log(erro)},
    })
  }

}
