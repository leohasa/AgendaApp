package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Recordatorio;
import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IRecordatorioService;
import org.springframework.web.bind.annotation.*;

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

}
