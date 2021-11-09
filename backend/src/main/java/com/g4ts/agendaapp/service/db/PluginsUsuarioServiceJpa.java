package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.PluginsUsuario;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.PluginsUsuarioRepository;
import com.g4ts.agendaapp.service.IPluginsUsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PluginsUsuarioServiceJpa implements IPluginsUsuarioService {

    private final PluginsUsuarioRepository pluginsUsuarioRepository;

    public PluginsUsuarioServiceJpa(PluginsUsuarioRepository pluginsUsuarioRepository) {
        this.pluginsUsuarioRepository = pluginsUsuarioRepository;
    }

    @Override
    public List<PluginsUsuario> findAllByUsuario(Usuario usuario) {
        return pluginsUsuarioRepository.findAllByUsuario(usuario);
    }

    @Override
    public PluginsUsuario findById(Integer id) {
        Optional<PluginsUsuario> oPlugins = pluginsUsuarioRepository.findById(id);
        return oPlugins.isPresent() ? oPlugins.get() : null;
    }

    @Override
    public void save(PluginsUsuario pluginsUsuario) {
        pluginsUsuarioRepository.save(pluginsUsuario);
    }

    @Override
    public void deleteById(Integer id) {
        pluginsUsuarioRepository.deleteById(id);
    }
}
