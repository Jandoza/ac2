import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html'  
})
export class CadastrarTarefa {
  private readonly svc = inject(TarefaService);

  titulo = '';
  descricao = '';

  cadastrar() {
    if (!this.titulo.trim()) return;

    this.svc.adicionar({
      titulo: this.titulo.trim(),
      descricao: this.descricao.trim() || undefined,
      concluida: false
    });

    this.titulo = '';
    this.descricao = '';
  }
}
