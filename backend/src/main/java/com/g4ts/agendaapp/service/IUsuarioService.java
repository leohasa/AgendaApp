package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Usuario;

import java.util.List;

public interface IUsuarioService {
    List<Usuario> findAll();
    Usuario findByUsername(String username);
    void save(Usuario usuario);
    void deleteById(String username);
    List<String> findSearchmatch(String match);
}
