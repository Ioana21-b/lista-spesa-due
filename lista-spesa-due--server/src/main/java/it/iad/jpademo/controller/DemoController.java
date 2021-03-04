package it.iad.jpademo.controller;

import it.iad.jpademo.dto.ListaDto;
import it.iad.jpademo.dto.ProdottoDto;
import it.iad.jpademo.model.Prodotto;
import it.iad.jpademo.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class DemoController {

    @Autowired
    private DemoService demoService;

    @RequestMapping("/demo")
    public void demo() {
        System.out.println("Siamo nel controller demo");
        demoService.demo();
    }

    @RequestMapping("/aggiungi")
    public ListaDto aggiungi(@RequestBody ProdottoDto prodottoDto) {
        System.out.println("Siamo nel controller aggiungi");
        List<Prodotto> lista = demoService.aggiungi(prodottoDto.getProdotto());
        return new ListaDto(lista);
    }

    @RequestMapping("/reset")
    public ListaDto reset() {
        System.out.println("Siamo nel controller reset");
        List<Prodotto> lista = demoService.reset();
        return new ListaDto(lista);
    }

    @RequestMapping("/mostraLista")
    public ListaDto mostraLista() {
        System.out.println("Siamo nel controller mostraLista");
        List<Prodotto> lista = demoService.mostraLista();
        return new ListaDto(lista);
    }
    
   @RequestMapping("/cancella")
    public ListaDto cancella(@RequestBody ProdottoDto prodottoDto) {
        System.out.println("Siamo nel controller cancella");
        List<Prodotto> lista = demoService.cancella(prodottoDto.getProdotto());
        return new ListaDto(lista);
    }
}
