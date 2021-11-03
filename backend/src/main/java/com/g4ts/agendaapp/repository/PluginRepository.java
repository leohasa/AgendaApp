package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Plugin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PluginRepository extends JpaRepository<Plugin, Integer> {
}
