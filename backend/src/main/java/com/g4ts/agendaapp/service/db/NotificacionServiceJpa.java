package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Notificacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.NotificacionRepository;
import com.g4ts.agendaapp.service.INotificacionService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NotificacionServiceJpa implements INotificacionService {

    private NotificacionRepository notificacionRepository;

    public NotificacionServiceJpa(NotificacionRepository notificacionRepository) {
        this.notificacionRepository = notificacionRepository;
    }

    @Override
    public void deleteAllByUsuario(String usuario) {
        this.notificacionRepository.deleteAllByUsuario(usuario);
    }

    @Override
    public List<Notificacion> findAll() {
        return this.notificacionRepository.findAll();
    }

    @Override
    public Notificacion findById(Integer id) {
        Optional<Notificacion> optionalNotificacion = this.notificacionRepository.findById(id);
        if(optionalNotificacion.isPresent())return optionalNotificacion.get();
        return null;
    }

    @Override
    public void save(Notificacion notificacion) {
        this.notificacionRepository.save(notificacion);
    }

    @Override
    public void deleteById(Integer id) {
        this.notificacionRepository.deleteById(id);
    }

    @Override
    public List<Notificacion> findAllByUsuario(Usuario usuario) {
        return this.notificacionRepository.findAllByUsuario(usuario);
    }

    @Override
    public List<Notificacion> findAllByUsuarioYFechaHora(Usuario usuario, LocalDateTime inicio, LocalDateTime fin) {
        return this.notificacionRepository.findAllByUsuarioAndFechaHoraBetween(usuario,inicio,fin);
    }
}
