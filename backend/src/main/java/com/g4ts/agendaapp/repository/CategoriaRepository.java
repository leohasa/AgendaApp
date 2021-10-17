package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
