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
  prodAgg: Prodotto;
  prodottoDto: ProdottoDto;
  listaOggetti: Array<Prodotto>;
  prodCanc: Prodotto;

  constructor(private http: HttpClient) {
    this.mostraLista();
  }

  // tslint:disable-next-line:typedef
  aggiungi(nome: string) {
    this.prodAgg = new Prodotto();
    this.prodAgg.nome = this.nome;
    this.prodottoDto = new ProdottoDto();
    this.prodottoDto.prodotto = this.prodAgg;
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
  
  cancella(prodCanc: Prodotto){
    this.prodottoDto = new ProdottoDto();
    this.prodottoDto.prodotto = prodCanc;
    const oss: Observable<listaDto> = this.http
    .post<listaDto>('http://localhost:8080/cancella',this.prodottoDto);
    oss.subscribe(z => this.lista = z.lista);
  }
}
