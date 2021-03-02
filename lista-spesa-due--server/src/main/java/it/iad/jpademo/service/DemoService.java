package it.iad.jpademo.service;

import it.iad.jpademo.model.Prodotto;

import java.util.List;

public interface DemoService {

    void demo();
    void aggiungi(Prodotto p);
    void reset();
    List<Prodotto> stampaLista();
}
