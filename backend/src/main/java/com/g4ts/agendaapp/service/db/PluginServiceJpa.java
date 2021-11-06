package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Plugin;
import com.g4ts.agendaapp.repository.PluginRepository;
import com.g4ts.agendaapp.service.IPluginService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PluginServiceJpa implements IPluginService {

    private PluginRepository pluginRepository;

    public PluginServiceJpa(PluginRepository pluginRepository) {
        this.pluginRepository = pluginRepository;
    }

    @Override
    public List<Plugin> findAll() {
        return pluginRepository.findAll();
    }

    @Override
    public Plugin findById(Integer id) {
        Optional<Plugin> oPlugin = pluginRepository.findById(id);
        return oPlugin.isPresent() ? oPlugin.get() : null;
    }

    @Override
    public void save(Plugin plugin) {
        pluginRepository.save(plugin);
    }

    @Override
    public void deleteById(Integer id) {
        pluginRepository.deleteById(id);
    }
}
