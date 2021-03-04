import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { listaDto } from './listaDto';
import { Prodotto } from './Prodotto';
import { ProdottoDto } from './prodottoDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-spesa-due-client';
  nome: string;
  lista: Array<Prodotto>;
  prod1: Prodotto;
  prodottoDto: ProdottoDto;
  listaOggetti: Array<Prodotto>;

  constructor(private http: HttpClient) {
    this.mostraLista();
  }

  // tslint:disable-next-line:typedef
  aggiungi(nome: string) {
    this.prod1 = new Prodotto();
    this.prod1.nome = this.nome;
    this.prodottoDto = new ProdottoDto();
    this.prodottoDto.prodotto = this.prod1;
    const oss: Observable<listaDto> = this.http
      .post<listaDto>('http://localhost:8080/aggiungi',
        this.prodottoDto);
    oss.subscribe(l => this.lista = l.lista);
    this.nome = '';
  }

  // tslint:disable-next-line:typedef
  reset() {
    const oss: Observable<listaDto> = this.http
      .get<listaDto>('http://localhost:8080/reset');
    oss.subscribe(l => this.lista = l.lista);
    this.nome = '';
  }

  mostraLista() {
    console.log(1);
    const oss: Observable<listaDto> = this.http
      .get<listaDto>('http://localhost:8080/mostraLista');
    console.log(2);
    oss.subscribe(l => {
      console.log(3);
      this.lista = l.lista;
    });
    console.log(4);
  }
}
