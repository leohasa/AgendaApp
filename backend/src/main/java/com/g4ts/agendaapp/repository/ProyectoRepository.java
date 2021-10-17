package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProyectoRepository extends JpaRepository<Proyecto, Integer> {
}
