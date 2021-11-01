package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.SolicitudRolEditor;

import java.util.List;

public interface ISolicitudRolEditorService {

    List<SolicitudRolEditor> findAll();
    SolicitudRolEditor findById(Integer id);
    void save(SolicitudRolEditor solicitud);
    void deleteById(Integer id);
}
