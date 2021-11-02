package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Recordatorio;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecordatorioRepository extends JpaRepository<Recordatorio, Integer> {

    List<Recordatorio> findAllByUsuario(Usuario usuario);

}
