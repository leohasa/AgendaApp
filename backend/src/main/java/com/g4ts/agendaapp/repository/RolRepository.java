package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RolRepository extends JpaRepository<Rol, Integer> {
    List<Rol> findAllByUsuario(Usuario usuario);
}
