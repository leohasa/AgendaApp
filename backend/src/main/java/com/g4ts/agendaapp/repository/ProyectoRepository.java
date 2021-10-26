package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProyectoRepository extends JpaRepository<Proyecto, Integer> {
    List<Proyecto> findAllByUsuario(Usuario usuario);
}
