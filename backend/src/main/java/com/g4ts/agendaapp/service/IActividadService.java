package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Actividad;
import com.g4ts.agendaapp.model.Proyecto;

import java.util.List;

public interface IActividadService {
    List<Actividad> findAll();
    Actividad findById(Integer id);
    void save(Actividad actividad);
    void deleteById(Integer id);

    List<Actividad> findAllByProyecto(Proyecto proyecto);
}
