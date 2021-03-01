package it.iad.jpademo.repository;

import it.iad.jpademo.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository
        extends JpaRepository<Persona, Long> {

}
