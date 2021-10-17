package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.UsuarioRepository;
import com.g4ts.agendaapp.service.IUsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceJpa implements IUsuarioService {

    private UsuarioRepository usuarioRepository;

    public UsuarioServiceJpa(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario findByUsername(String username) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(username);
        if (optionalUsuario.isPresent()) return optionalUsuario.get();
        return  null;
    }

    @Override
    public void save(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    @Override
    public void deleteById(String username) {
        usuarioRepository.deleteById(username);
    }
}
