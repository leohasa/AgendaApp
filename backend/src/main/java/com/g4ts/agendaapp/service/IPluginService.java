package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Plugin;

import java.util.List;

public interface IPluginService {

    List<Plugin> findAll();
    Plugin findById(Integer id);
    void save(Plugin plugin);
    void deleteById(Integer id);
}
