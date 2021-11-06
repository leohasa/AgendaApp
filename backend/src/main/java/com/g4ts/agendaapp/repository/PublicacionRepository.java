package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PublicacionRepository extends JpaRepository<Publicacion, Integer> {

    Publicacion findByTitulo(String title);
    List<Publicacion> findByUsuarioOrderByFechaPublicacionDesc(Usuario usuario);

}
