package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.SolicitudRolEditor;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IRolService;
import com.g4ts.agendaapp.service.ISolicitudRolEditorService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/solicitud")
public class SolicitudController {

    private ISolicitudRolEditorService solicitudService;
    private IRolService rolService;

    public SolicitudController(ISolicitudRolEditorService solicitudService, IRolService rolService) {
        this.solicitudService = solicitudService;
        this.rolService = rolService;
    }

    @GetMapping("/solicitudes")
    public List<SolicitudRolEditor> getSolicitudes() {
        return solicitudService.findAll();
    }

    @GetMapping("/listByEstado/{estado}")
    public List<SolicitudRolEditor> listByEstado(@PathVariable Short estado) {
        return solicitudService.findAllByEstado(estado);
    }

    @GetMapping("/get/{id}")
    public SolicitudRolEditor get(@PathVariable Integer id) {
        return solicitudService.findById(id);
    }

    @PostMapping("/addSolicitud")
    public void addSolicitud(@RequestBody SolicitudRolEditor solicitud) {
        solicitud.setFecha(LocalDate.now());
        solicitud.setEstado(Short.parseShort("1"));
        solicitudService.save(solicitud);
    }

    @GetMapping("/newEditor/{id}")
    public void aceptarSolicitudRol(@PathVariable Integer id) {
        SolicitudRolEditor solicitud = solicitudService.findById(id);
        rolService.save(Rol.builder().tipo("EDITOR").usuario(solicitud.getUsuario()).build());

        solicitud.setEstado(Short.parseShort("0"));
        solicitudService.save(solicitud);
    }

    @GetMapping("/rechazar/{id}")
    public void rechazar(@PathVariable Integer id) {
        solicitudService.deleteById(id);
    }

    @GetMapping("/existsByUser/{username}")
    public boolean existsByUser(@PathVariable String username) {
        return solicitudService.existsByUsuario(Usuario.builder().username(username).build());
    }
}
