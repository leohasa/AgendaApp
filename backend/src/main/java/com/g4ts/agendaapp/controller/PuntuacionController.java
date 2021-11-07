package com.g4ts.agendaapp.controller;



import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Puntuacion;
import com.g4ts.agendaapp.service.IPuntuacionService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/puntuacion")
public class PuntuacionController {

private IPuntuacionService puntuacionService;

    public PuntuacionController(IPuntuacionService puntuacionService){
        this.puntuacionService = puntuacionService;
    }
    //@RequestMapping("")//
    @GetMapping("/usrpublicacion/{username}/{idPublicacion}")
    public Puntuacion getPuntuacionByUserAndPublicacion(@PathVariable String username,@PathVariable String idPublicacion){
        return this.puntuacionService.getPuntuacionByUserAndPublicacion(username,idPublicacion);
    }
    @GetMapping("/exist/{username}/{idPublicacion}")
    public Boolean existPuntuacionByUserAndPublicacion(@PathVariable String username,@PathVariable String idPublicacion){
        return this.puntuacionService.existsByUsuarioAndPublicacion(username,idPublicacion);
    }
    @PostMapping("/add")
    public void save(@RequestBody Puntuacion puntuacion){
        this.puntuacionService.save(puntuacion);
    }
    @PutMapping("/update")
    public void update(@RequestBody Puntuacion puntuacion){
        this.puntuacionService.save(puntuacion);
    }


}
