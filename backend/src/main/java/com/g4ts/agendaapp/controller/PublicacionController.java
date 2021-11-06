package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Comentario;
import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.ComentarioRepository;
import com.g4ts.agendaapp.service.IComentarioService;
import com.g4ts.agendaapp.service.IPublicacionService;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/foro")
public class PublicacionController {    

    private IPublicacionService publicacionService;
    private IComentarioService comentarioService;

    public PublicacionController(IPublicacionService publicacionService, IComentarioService comentarioService){ this.publicacionService = publicacionService;
        this.comentarioService = comentarioService;
            }

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

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        //Comentario comentario = Comentario.builder().(username).build();
        Publicacion publicacion = Publicacion.builder().id(id).build();
        this.comentarioService.deleteByPublicacion(publicacion);
        this.publicacionService.deleteById(id);

    }

}
