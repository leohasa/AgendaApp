package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IProyectoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/proyecto")
public class ProyectoController {

    private IProyectoService proyectoService;

    public ProyectoController(IProyectoService proyectoService) {
        this.proyectoService = proyectoService;
    }

    @GetMapping("/list/{username}")
    public List<Proyecto> list(@PathVariable String username) {
        Usuario usuario = Usuario.builder().username(username).build();
        return proyectoService.findAllByUsuario(usuario);
    }

    @PostMapping("/add")
    public void save(@RequestBody Proyecto proyecto) {
        proyectoService.save(proyecto);
    }

    @GetMapping("/get/{id}")
    public Proyecto getProyecto(@PathVariable Integer id) {
        return proyectoService.findById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody Proyecto proyecto) {
        proyectoService.save(proyecto);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        proyectoService.deleteById(id);
    }
}
