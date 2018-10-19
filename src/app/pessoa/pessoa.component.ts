import { Component, OnInit } from '@angular/core';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Array<Pessoa>;
  pessoa: Pessoa;
  generos: Array<string>;

  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.generos = new Array('Outros', 'Masculino', 'Feminino');
    this.pessoas = new Array();
  }

  public salvar(): void {
    if (this.pessoa.id) {
      let indice = this.recuperaIndiceDaPessoa(this.pessoa.id);
      this.pessoas[indice] = this.pessoa;
    } else {
      // cadastro
      this.pessoa.id = Math.ceil(Math.random() * 9999999);
      this.pessoas.push(this.pessoa);
    }
    
    this.pessoa = new Pessoa();
  }

  public excluir(id: number): void {
    let indiceARemover = this.recuperaIndiceDaPessoa(id);
    this.pessoas.splice(indiceARemover, 1);
  }

  public editar(p: Pessoa): void {
    this.pessoa = Object.create(p);
  }

  private recuperaIndiceDaPessoa(id: number): number {
    let indice = this.pessoas.findIndex(p => p.id == id);
    return indice;
  }

}