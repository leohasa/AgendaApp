package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Puntuacion;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PuntuacionRepository extends JpaRepository<Puntuacion, Integer> {

    Puntuacion findPuntuacionByUsuarioAndPublicacion(Usuario usuario, Publicacion publicacion);
    Boolean existsByUsuarioAndPublicacion(Usuario usuario, Publicacion publicacion);
}
