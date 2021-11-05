package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Notificacion;
import com.g4ts.agendaapp.model.Usuario;

import java.time.LocalDateTime;
import java.util.List;

public interface INotificacionService {
    List<Notificacion> findAll();
    Notificacion findById(Integer id);
    void save(Notificacion notificacion);
    void deleteById(Integer id);

    List<Notificacion> findAllByUsuario(Usuario usuario);
    List<Notificacion> findAllByUsuarioYFechaHora(Usuario usuario, LocalDateTime inicio, LocalDateTime fin);
}
