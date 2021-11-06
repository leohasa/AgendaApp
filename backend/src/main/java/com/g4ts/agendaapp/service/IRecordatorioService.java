package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Recordatorio;
import com.g4ts.agendaapp.model.Usuario;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface IRecordatorioService {
    List<Recordatorio> findAll();
    Recordatorio findById(Integer id);
    void save(Recordatorio recordatorio);
    void deleteById(Integer id);

    List<Recordatorio> findAllByUsuario(Usuario usuario);
    List<Recordatorio> findAllByUsuarioYFecha(Usuario usuario, LocalDateTime inicio, LocalDateTime fin);
}
