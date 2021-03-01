package it.iad.jpademo.service.impl;

import it.iad.jpademo.model.Persona;
import it.iad.jpademo.repository.PersonaRepository;
import it.iad.jpademo.service.DemoService;
import java.time.LocalDate;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemoServiceImpl implements DemoService {

    @Autowired
    PersonaRepository personaRepository;

    @Override
    public void demo() {
        personaRepository.deleteAllInBatch();
        Persona p = new Persona("Mario", "Rossi", LocalDate.now());
        personaRepository.save(p);
        p = new Persona("Antonio", "Bianchi", LocalDate.now().minusYears(10));
        personaRepository.save(p);
        p = new Persona("Elisabetta", "Verdi", LocalDate.now().minusYears(20));
        personaRepository.save(p);

        List<Persona> lista = personaRepository.findAll();
        System.out.println(lista);
        System.out.println("---------------");
        lista.forEach(q -> System.out.println(q));
        System.out.println("---------------");
        for (Persona per : lista) {
            System.out.println(per);
        }
        System.out.println("---------------");
        for (int i = 0; i < lista.size(); i++) {
            Persona get = lista.get(i);
            System.out.println(get);
        }
        System.out.println("---------------");
        Iterator<Persona> iter = lista.iterator();
        while (iter.hasNext()) {
            Persona next = iter.next();
            System.out.println(next);
        }
    }

}
