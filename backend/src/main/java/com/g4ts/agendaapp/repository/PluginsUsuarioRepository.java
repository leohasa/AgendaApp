package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Plugin;
import com.g4ts.agendaapp.model.PluginsUsuario;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PluginsUsuarioRepository extends JpaRepository<PluginsUsuario, Integer> {

    List<PluginsUsuario> findAllByUsuario(Usuario usuario);
}
