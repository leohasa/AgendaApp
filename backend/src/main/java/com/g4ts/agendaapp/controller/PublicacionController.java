package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.service.IPublicacionService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/foro")
public class PublicacionController {

    private IPublicacionService publicacionService;

    public PublicacionController(IPublicacionService publicacionService){ this.publicacionService = publicacionService;}

    @GetMapping("/publicacion")
    public List<Publicacion> list(){
        System.out.println("Comentario para probar actualizaciones automaticas");
        System.out.println("2.....Comentario para probar actualizaciones automaticas");
        return this.publicacionService.findAll(); }

}
