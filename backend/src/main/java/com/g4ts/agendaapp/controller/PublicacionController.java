package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IPublicacionService;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/foro")
public class PublicacionController {    

    private IPublicacionService publicacionService;

    public PublicacionController(IPublicacionService publicacionService){ this.publicacionService = publicacionService;}

    @GetMapping("/publicacion/{username}")
    public List<Publicacion> list(@PathVariable String username){
        Usuario usuario = Usuario.builder().username(username).build();
         return this.publicacionService.findAll();
    }


    @PostMapping("/add")
    public void save(@RequestBody Publicacion publicacion){
        System.out.println("/add "+publicacion);
        System.out.println("Publicacion desde sprint "+ publicacion.getContenido());
        this.publicacionService.save(publicacion);

    }
    @PutMapping("/update")
    public void update(@RequestBody Publicacion publicacion){
        System.out.println("actualizando server publicacion");
        this.publicacionService.save(publicacion);
    }
}
