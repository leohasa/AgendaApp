package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.SolicitudRolEditor;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.SolicitudRolEditorRepository;
import com.g4ts.agendaapp.service.ISolicitudRolEditorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SolicitudRolEditorJpa implements ISolicitudRolEditorService {

    private final SolicitudRolEditorRepository solicitudRepository;

    public SolicitudRolEditorJpa(SolicitudRolEditorRepository solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }

    @Override
    public List<SolicitudRolEditor> findAll() {
        return solicitudRepository.findAll();
    }

    @Override
    public SolicitudRolEditor findById(Integer id) {
        Optional<SolicitudRolEditor> oSolicitud = solicitudRepository.findById(id);
        return oSolicitud.isPresent() ? oSolicitud.get() : null;
    }

    @Override
    public void save(SolicitudRolEditor solicitud) {
        solicitudRepository.save(solicitud);
    }

    @Override
    public void deleteById(Integer id) {
        solicitudRepository.deleteById(id);
    }

    @Override
    public Boolean existsByUsuario(Usuario usuario) {
        return solicitudRepository.existsByUsuario(usuario);
    }

    @Override
    public List<SolicitudRolEditor> findAllByEstado(Short estado) {
        return solicitudRepository.findAllByEstado(estado);
    }
}
