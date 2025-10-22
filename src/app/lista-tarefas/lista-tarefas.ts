
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefa-service';

@Component({
  selector: 'app-lista-tarefas',
  imports: [RouterLink],
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {
  private readonly svc = inject(TarefaService);

  get tarefas() {
    return this.svc.listar();
  }

  get contadorTarefas() {
    return this.svc.contador;
  }

  remover(id: number) {
    this.svc.remover(id);
  }

  concluir(id: number) {
    this.svc.marcarConcluida(id);
  }

  trackById = (_: number, t: { id: number }) => t.id;
}
