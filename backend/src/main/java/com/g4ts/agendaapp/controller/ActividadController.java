package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Actividad;
import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.service.IActividadService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/actividad")
public class ActividadController {

    private IActividadService actividadService;

    public ActividadController(IActividadService actividadService) {
        this.actividadService = actividadService;
    }

    @GetMapping("/list/{idProyecto}")
    public List<Actividad> list(@PathVariable Integer idProyecto) {
        Proyecto proyecto = Proyecto.builder().id(idProyecto).build();
        return actividadService.findAllByProyecto(proyecto);
    }

    @PostMapping("/add")
    public void save(@RequestBody Actividad actividad) {
        actividadService.save(actividad);
    }

    @GetMapping("/get/{id}")
    public Actividad getActividad(@PathVariable Integer id) {
        return actividadService.findById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody Actividad actividad) {
        actividadService.save(actividad);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        actividadService.deleteById(id);
    }

    @GetMapping("/")
    public List<Actividad> getAll() {
        return actividadService.findAll();
    }
}
