package it.iad.jpademo.controller;

import it.iad.jpademo.dto.ProdottoDto;
import it.iad.jpademo.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public void aggiungi( @RequestBody ProdottoDto prodottoDto ){
                System.out.println("Siamo nel controller aggiungi");
                demoService.aggiungi(prodottoDto.getProdotto());
        }
}
