package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Actividad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActividadRepository extends JpaRepository<Actividad, Integer> {
}
