/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad.jpademo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author lenovo
 */
@Entity
public class Prodotto {

    @Id
    private String nome;

    public Prodotto(String nome) {
        this.nome = nome;
    }

    public Prodotto() {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Prodotto{" + "nome=" + nome + '}';
    }

}
