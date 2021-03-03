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
  nome: String;
  lista: Array<Prodotto> = this.aggiornaLista();
  prod1: Prodotto;
  prodottoDto: ProdottoDto;
  listaOggetti: Array<Prodotto>;

 
  constructor(private http: HttpClient){}

  aggiungi(nome: String) {
  this.prod1 = new Prodotto();
  this.prod1.nome= this.nome;
  this.prodottoDto= new ProdottoDto();
  this.prodottoDto.prodotto= this.prod1;
  let oss: Observable<ProdottoDto> = this.http
  .post<ProdottoDto>('http://localhost:8080/aggiungi',
    this.prodottoDto);
    this.aggiornaLista;
}

  reset() {
    let oss = this.http
    .get('http://localhost:8080/reset');
    this.aggiornaLista;
  }

  aggiornaLista(): Array<Prodotto> {
    this.http
    .get('http://localhost:8080/mostraLista');
    let oss : Observable<listaDto>;
    oss.subscribe(i => this.lista=i.lista);
    return this.lista;
  }
}
