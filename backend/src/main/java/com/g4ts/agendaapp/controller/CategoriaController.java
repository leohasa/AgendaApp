package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Categoria;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.ICategoriaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    private ICategoriaService categoriaService;

    public CategoriaController(ICategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping("/list/{username}")
    public List<Categoria> list(@PathVariable String username) {
        Usuario usuario = Usuario.builder().username(username).build();
        return categoriaService.findAllByUser(usuario);
    }

    @PostMapping("/add")
    public void save(@RequestBody Categoria categoria) {
        categoriaService.save(categoria);
    }

    @GetMapping("/get/{id}")
    public Categoria getCategoria(@PathVariable Integer id) {
        return categoriaService.findById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody Categoria categoria) {
        categoriaService.save(categoria);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        categoriaService.deleteById(id);
    }
}
