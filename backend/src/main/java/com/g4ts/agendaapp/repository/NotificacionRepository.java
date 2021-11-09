package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Notificacion;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

public interface NotificacionRepository extends JpaRepository<Notificacion, Integer> {

    List<Notificacion> findAllByUsuario(Usuario usuario);
    @Transactional
    @Modifying
    @Query("delete from Notificacion as n where n.usuario.username = :username ")
    void deleteAllByUsuario(@Param("username") String username);
    List<Notificacion> findAllByUsuarioAndFechaHoraBetween(Usuario usuario, LocalDateTime inicio, LocalDateTime fin);

}
