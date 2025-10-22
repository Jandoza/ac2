
import { Injectable } from '@angular/core';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private _tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return [...this._tarefas];
  }

  adicionar(t: Omit<Tarefa, 'id'>): void {
    this._tarefas.push({ id: Date.now(), ...t, concluida: false });
  }


  remover(id: number): void {
    this._tarefas = this._tarefas.filter(t => t.id !== id);
  }

  marcarConcluida(id: number): void {
    const tarefa = this._tarefas.find(t => t.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida;
  }

  get contador(): number {
    return this._tarefas.length;
  }
}
