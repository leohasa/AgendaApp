package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.*;
import com.g4ts.agendaapp.service.*;
import com.g4ts.agendaapp.service.db.ComentarioServiceJpa;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/comentario")
public class ComentarioController {

    private IComentarioService comentarioService;
    public ComentarioController(IComentarioService comentarioService) {
        this.comentarioService = comentarioService;
    }

    @GetMapping("/comentarios/{idPublicacion}")
    public List<Comentario> list(@PathVariable Integer idPublicacion)  {

        Publicacion publicacion = Publicacion.builder().id(idPublicacion).build();
        return comentarioService.findComentarioByPublicacion( publicacion);

    }
    @GetMapping("/publicacion/{}")
    public List<Comentario> all(){
        return comentarioService.findAll();
    }

    @GetMapping("/publicacion/{idPublicacion}")
    public List<Comentario> getComentarioByIdPublicacion(){
        return comentarioService.findAll();
    }

    @PostMapping("/add")
    public void save(@RequestBody Comentario comentario) {
        comentarioService.save(comentario);
    }


}
