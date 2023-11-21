import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TarefaCadastrarComponent } from "./pages/tarefa/tarefa-cadastrar/tarefa-cadastrar.component";
import { TarefaListarComponent } from "./pages/tarefa/tarefa-listar/tarefa-listar.component";


const routes: Routes = [
  {
    path: "",
    component: TarefaCadastrarComponent,
  },
  {
    path: "pages/tarefa/tarefa-cadastrar",
    component: TarefaCadastrarComponent,
  },
  {
    path: "pages/tarefa/tarefa-listar",
    component: TarefaListarComponent,
  },
  // {
  //   path: "pages/despesa/despesa-resultado",
  //   component : DespesaResultadoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
