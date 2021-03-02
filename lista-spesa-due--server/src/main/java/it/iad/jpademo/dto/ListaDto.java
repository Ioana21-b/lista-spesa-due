package it.iad.jpademo.dto;

import it.iad.jpademo.model.Prodotto;

import java.util.List;

public class ListaDto {

    List<Prodotto> lista;

    public ListaDto(List<Prodotto> lista) {
        this.lista = lista;
    }

    public ListaDto() {
    }

    public List<Prodotto> getLista() {
        return lista;
    }

    public void setLista(List<Prodotto> lista) {
        this.lista = lista;
    }
}
