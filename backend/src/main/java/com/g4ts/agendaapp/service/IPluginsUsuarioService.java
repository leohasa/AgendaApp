package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.PluginsUsuario;
import com.g4ts.agendaapp.model.Usuario;

import java.util.List;

public interface IPluginsUsuarioService {

    List<PluginsUsuario> findAllByUsuario(Usuario usuario);
    PluginsUsuario findById(Integer id);
    void save(PluginsUsuario pluginsUsuario);
    void deleteById(Integer id);
}
