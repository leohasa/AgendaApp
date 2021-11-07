package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Recordatorio;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface RecordatorioRepository extends JpaRepository<Recordatorio, Integer> {

    List<Recordatorio> findAllByUsuario(Usuario usuario);
    List<Recordatorio> findAllByUsuarioAndFechaBetween(Usuario usuario, LocalDateTime inicio, LocalDateTime fin);

}
