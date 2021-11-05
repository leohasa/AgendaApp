package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;

import java.util.List;

public interface IPublicacionService {

    List<Publicacion> findAll();
    Publicacion findByTitulo(String title);
    List<Publicacion> findByUsuarioOrderByFechaPublicacionDesc(Usuario usuario);
    void save(Publicacion publicacion);
    void deleteById(String username);

}
