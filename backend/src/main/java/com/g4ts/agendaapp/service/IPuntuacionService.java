package com.g4ts.agendaapp.service;


import com.g4ts.agendaapp.model.Puntuacion;

public interface IPuntuacionService {

    Puntuacion getPuntuacionByUserAndPublicacion(String user, String publicacion);
    Boolean existsByUsuarioAndPublicacion(String usuario, String publicacion);
    void save(Puntuacion puntuacion);
}
