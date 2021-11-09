package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Plugin;
import com.g4ts.agendaapp.model.PluginsUsuario;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IPluginsUsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/plugins")
public class PluginsUsuarioController {

    private final IPluginsUsuarioService pluginsService;

    public PluginsUsuarioController(IPluginsUsuarioService pluginsService) {
        this.pluginsService = pluginsService;
    }

    @GetMapping("/list/{username}")
    public List<PluginsUsuario> list(@PathVariable String username) {
        return pluginsService.findAllByUsuario(Usuario.builder().username(username).build());
    }

    @PostMapping("/add")
    public void save(@RequestBody PluginsUsuario plugins) {
        pluginsService.save(plugins);
    }

    @GetMapping("/get/{id}")
    public PluginsUsuario get(@PathVariable Integer id) {
        return pluginsService.findById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody PluginsUsuario plugins) {
        pluginsService.save(plugins);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        pluginsService.deleteById(id);
    }
}
