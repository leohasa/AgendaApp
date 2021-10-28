package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IRolService;
import com.g4ts.agendaapp.service.IUsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private IUsuarioService usuarioService;
    private IRolService rolService;

    public UsuarioController(IUsuarioService usuarioService, IRolService rolService) {
        this.usuarioService = usuarioService;
        this.rolService = rolService;
    }

    @GetMapping("/list")
    public List<Usuario> list() {
        return usuarioService.findAll();
    }

    @PostMapping("/add")
    public void save(@RequestBody Usuario usuario) {
        usuarioService.save(usuario);
        rolService.save(Rol.builder().tipo("USUARIO").usuario(usuario).build());
    }

    @GetMapping("/get/{username}")
    public Usuario getUsaer(@PathVariable String username) {
        return usuarioService.findByUsername(username);
    }

    @PutMapping("/update")
    public void updateUser(@RequestBody Usuario usuario) {
        usuarioService.save(usuario);
    }

    @DeleteMapping("/delete/{username}")
    public void delete(@PathVariable String username) {
        usuarioService.deleteById(username);
    }

    @PostMapping("/signIn")
    public Usuario signIn(@RequestBody Usuario usuario) {
        Usuario usuarioDb = usuarioService.findByUsername(usuario.getUsername());
        if (!Objects.isNull(usuarioDb) && usuario.getPassword().equals(usuarioDb.getPassword())) {
                return usuarioDb;
        }
        return null;
    }

    @GetMapping("/roles/{username}")
    public List<Rol> getRoles(@PathVariable String username) {
        Usuario usuario = Usuario.builder().username(username).build();
        return rolService.findAllByuser(usuario);
    }
}
