package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.model.Comentario;
import com.g4ts.agendaapp.model.Publicacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {

    List<Comentario> findComentarioByPublicacionOrderByFechaDesc ( Publicacion publicacion);

}
