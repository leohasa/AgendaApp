package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Comentario;
import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;


import java.util.List;

public interface IComentarioService {

    List<Comentario> findAll();
    List<Comentario> findComentarioByPublicacion( Publicacion publicacion);
    Comentario findByTitulo(String title);
    void save(Comentario comentario);
    void deleteById(String username);
    void deleteByPublicacion(Publicacion publicacion);
}
