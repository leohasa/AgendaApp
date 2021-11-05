package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Notificacion;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface NotificacionRepository extends JpaRepository<Notificacion, Integer> {

    List<Notificacion> findAllByUsuario(Usuario usuario);
    List<Notificacion> findAllByUsuarioAndFechaHoraBetween(Usuario usuario, LocalDateTime inicio, LocalDateTime fin);

}
