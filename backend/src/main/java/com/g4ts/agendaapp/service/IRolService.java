package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IRolService {
    List<Rol> findAllByuser(Usuario usuario);
    void save(Rol rol);
}
