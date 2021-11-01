package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Actividad;
import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ActividadRepository extends JpaRepository<Actividad, Integer> {

    List<Actividad> findAllByProyecto(Proyecto proyecto);
    List<Actividad> findAllByUsuario(Usuario usuario);

}
