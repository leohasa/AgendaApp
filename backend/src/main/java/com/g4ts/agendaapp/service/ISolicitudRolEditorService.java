package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.SolicitudRolEditor;
import com.g4ts.agendaapp.model.Usuario;

import java.util.List;

public interface ISolicitudRolEditorService {

    List<SolicitudRolEditor> findAll();
    SolicitudRolEditor findById(Integer id);
    void save(SolicitudRolEditor solicitud);
    void deleteById(Integer id);

    Boolean existsByUsuario(Usuario usuario);
    List<SolicitudRolEditor> findAllByEstado(Short estado);
}
