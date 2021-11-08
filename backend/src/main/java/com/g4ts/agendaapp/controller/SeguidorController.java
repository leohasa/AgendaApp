package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Actividad;
import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Seguidor;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IActividadService;
import com.g4ts.agendaapp.service.ISeguidorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/seguidor")
public class SeguidorController {

    private ISeguidorService seguidorService;

    public SeguidorController(ISeguidorService seguidorService) {
        this.seguidorService = seguidorService;
    }

    @GetMapping("/seguidores_de/{idUsuario}")
    public List<Seguidor> list(@PathVariable String idUsuario) {
        Usuario usuario = Usuario.builder().username(idUsuario).build();
        return seguidorService.findAllSeguidoresByUsuario(usuario);
    }
    @PostMapping("/add")
    public void save(@RequestBody Seguidor seguidor){
        System.out.println("Agregar  seguidor");
        System.out.println(seguidor.toString());
        this.seguidorService.save(seguidor);
    }

    @PostMapping("/add2")
    public void save2(@RequestBody Seguidor seguidor){
        System.out.println("Agregar  seguidor");
        System.out.println(seguidor.toString());
        this.seguidorService.save(seguidor);
    }
    @GetMapping("/seguidopor/{username}")
    public List<String> findUserMatch(@PathVariable String username){
        //Usuario usuario = Usuario.builder().username(idSeguidor).build();
        List<String> lst =this.seguidorService.findSeguidorsBySeguidor(username);
        for (String s:
                lst) {
            System.out.println(s);
        }
        return lst;
    }

}
