package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.SolicitudRolEditor;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IRolService;
import com.g4ts.agendaapp.service.ISolicitudRolEditorService;
import com.g4ts.agendaapp.service.IUsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private final IUsuarioService usuarioService;
    private final IRolService rolService;
    private final ISolicitudRolEditorService solicitudService;

    public UsuarioController(IUsuarioService usuarioService, IRolService rolService, ISolicitudRolEditorService solicitudService) {
        this.usuarioService = usuarioService;
        this.rolService = rolService;
        this.solicitudService = solicitudService;
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

    @PostMapping("/addSolicitud")
    public void addSolicitud(@RequestBody SolicitudRolEditor solicitud) {
        solicitudService.save(solicitud);
    }

    @GetMapping("/newEditor/{id}")
    public void aceptarSolicitudRol(@PathVariable Integer id) {
        SolicitudRolEditor solicitud = solicitudService.findById(id);
        rolService.save(Rol.builder().tipo("EDITOR").usuario(solicitud.getUsuario()).build());
        solicitudService.deleteById(id);
    }
}
