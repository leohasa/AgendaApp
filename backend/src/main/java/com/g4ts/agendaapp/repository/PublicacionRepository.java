package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicacionRepository extends JpaRepository<Publicacion, Integer> {
    Publicacion findByTitulo(String title);
}
