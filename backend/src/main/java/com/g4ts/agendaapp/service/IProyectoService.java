package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Proyecto;

import java.util.List;

public interface IProyectoService {
    List<Proyecto> findAll();
    Proyecto findById(Integer id);
    void save(Proyecto proyecto);
    void deleteById(Integer id);
}
