package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Plugin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PluginRepository extends JpaRepository<Plugin, Integer> {
    @Query("select p from Plugin as p where  p.id not in (select pu.plugin.id from PluginsUsuario as pu where pu.usuario.username =  :username)")
    List<Plugin> unfollowPost(@Param("username") String username);
}
