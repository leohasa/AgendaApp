package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Actividad;
import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Seguidor;
import com.g4ts.agendaapp.model.Usuario;

import java.util.List;

public interface ISeguidorService {

    void save(Seguidor seguidor);
    List<Seguidor> findAll();

    List<Seguidor> findAllSeguidoresByUsuario(Usuario usuario);
    //List<String> findUsuarioByIdSeguidor(String idSeguidor);
    List<Seguidor> findSeguido(String idSeguidor);
    List<String> findSeguidorsBySeguidor(String username);
}
