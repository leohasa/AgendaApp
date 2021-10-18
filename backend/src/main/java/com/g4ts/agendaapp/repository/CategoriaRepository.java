package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Categoria;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

    List<Categoria> findAllByUsuario(Usuario usuario);
}
