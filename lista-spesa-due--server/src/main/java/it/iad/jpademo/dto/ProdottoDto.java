/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad.jpademo.dto;

import it.iad.jpademo.model.Prodotto;

/**
 *
 * @author lenovo
 */
public class ProdottoDto {
    Prodotto prodotto;

    public ProdottoDto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    public ProdottoDto() {
    }

   

  
    
}
