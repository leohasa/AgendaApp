package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Recordatorio;
import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IRecordatorioService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.LinkedList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/recordatorio")
public class RecordatorioController {

    IRecordatorioService iRecordatorioService;

    public RecordatorioController(IRecordatorioService iRecordatorioService) {
        this.iRecordatorioService = iRecordatorioService;
    }

    @PostMapping("/add")
    public void save(@RequestBody Recordatorio recordatorio) {
        this.iRecordatorioService.save(recordatorio);
    }

    @PostMapping("/get")
    public List<Recordatorio> get(@RequestBody String idUsuario) {
        return this.iRecordatorioService.findAllByUsuario(Usuario.builder().username(idUsuario).build());
    }

    @PostMapping("/getPorFecha")
    public List<Recordatorio> getPorFecha(@RequestBody String idUsuario) {
        return this.iRecordatorioService.findAllByUsuarioYFecha(Usuario.builder().username(idUsuario).build(),LocalDateTime.of(LocalDate.now(), LocalTime.MIN),LocalDateTime.of(LocalDate.now(), LocalTime.MAX));
    }

    @PostMapping("/delete")
    public void delete(@RequestBody Integer idRecordatorio) {
        this.iRecordatorioService.deleteById(idRecordatorio);
    }

    @GetMapping("/get/{id}")
    public Recordatorio getById(@PathVariable Integer id) {
        return this.iRecordatorioService.findById(id);
    }
}
