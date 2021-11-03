package com.g4ts.agendaapp.controller;


import com.g4ts.agendaapp.model.Plugin;
import com.g4ts.agendaapp.service.IPluginService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/plugin")
public class PluginController {

    private IPluginService pluginService;

    public PluginController(IPluginService pluginService) {
        this.pluginService = pluginService;
    }

    @GetMapping("/list")
    public List<Plugin> list() {
        return pluginService.findAll();
    }

    @PostMapping("/add")
    public void save(@RequestBody Plugin plugin) {
        pluginService.save(plugin);
    }

    @GetMapping("/get/{id}")
    public Plugin get(@PathVariable Integer id) {
        return pluginService.findById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody Plugin plugin) {
        pluginService.save(plugin);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        pluginService.deleteById(id);
    }
}
