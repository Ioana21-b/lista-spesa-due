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
  lista: Array<Prodotto> = this.mostraLista();
  prod1: Prodotto;
  prodottoDto: ProdottoDto;
  listaOggetti: Array<Prodotto>;


  constructor(private http: HttpClient){}

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
      .post<listaDto>('http://localhost:8080/reset',
        this.prodottoDto);
    oss.subscribe(l => this.lista = l.lista);
    this.nome = '';
  }

  mostraLista(): Array<Prodotto> {
    const oss: Observable<listaDto> = this.http
      .post<listaDto>('http://localhost:8080/mostraLista',
        this.prodottoDto);
    oss.subscribe(l => this.lista = l.lista);
    return this.lista;
  }
}
