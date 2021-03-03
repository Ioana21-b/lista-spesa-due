package it.iad.jpademo.service;

import it.iad.jpademo.model.Prodotto;

import java.util.List;

public interface DemoService {

    void demo();
    List<Prodotto> aggiungi(Prodotto p);
    List<Prodotto> reset();
    List<Prodotto> mostraLista();
}
