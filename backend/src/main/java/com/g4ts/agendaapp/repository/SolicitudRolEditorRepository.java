package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.SolicitudRolEditor;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SolicitudRolEditorRepository extends JpaRepository<SolicitudRolEditor, Integer> {
    Boolean existsByUsuario(Usuario usuario);
    List<SolicitudRolEditor> findAllByEstado(Short estado);
}
