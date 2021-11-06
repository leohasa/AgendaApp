package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Notificacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.INotificacionService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/notificacion")
public class NotificacionController {

    INotificacionService iNotificacionService;

    public NotificacionController(INotificacionService iNotificacionService) {
        this.iNotificacionService = iNotificacionService;
    }

    @PostMapping("/add")
    public void save(@RequestBody Notificacion notificacion) {
        notificacion.setFechaHora(LocalDateTime.now());
        this.iNotificacionService.save(notificacion);
    }

    @PostMapping("/get")
    public List<Notificacion> get(@RequestBody String idUsuario) {
        return this.iNotificacionService.findAllByUsuario(Usuario.builder().username(idUsuario).build());
    }

    @PostMapping("/getPorFechaHora")
    public List<Notificacion> getPorFecha(@RequestBody String idUsuario) {
        return this.iNotificacionService.findAllByUsuarioYFechaHora(Usuario.builder().username(idUsuario).build(),LocalDateTime.of(LocalDate.now(), LocalTime.MIN),LocalDateTime.of(LocalDate.now(), LocalTime.MAX));
    }

    @PostMapping("/delete")
    public void delete(@RequestBody Integer idNotificacion) {
        this.iNotificacionService.deleteById(idNotificacion);
    }

}
