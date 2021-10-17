package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Categoria;

import java.util.List;

public interface ICategoriaService {
    List<Categoria> findAll();
    Categoria findById(Integer id);
    void save(Categoria categoria);
    void deleteById(Integer id);
}
