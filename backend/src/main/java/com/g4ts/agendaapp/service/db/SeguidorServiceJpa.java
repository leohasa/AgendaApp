package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Actividad;
import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Seguidor;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.ActividadRepository;
import com.g4ts.agendaapp.repository.SeguidorRepository;
import com.g4ts.agendaapp.service.IActividadService;
import com.g4ts.agendaapp.service.ISeguidorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeguidorServiceJpa implements ISeguidorService {

    private SeguidorRepository seguidorRepository;

    public SeguidorServiceJpa(SeguidorRepository seguidorRepository) {
        this.seguidorRepository = seguidorRepository;
    }

    @Override
    public void save(Seguidor seguidor) {

        seguidorRepository.save(seguidor);
    }
    @Override
    public List<Seguidor> findAll() {
        return seguidorRepository.findAll();
    }

    @Override
    public List<Seguidor> findAllSeguidoresByUsuario(Usuario usuario) {
        return seguidorRepository.findByUsuario(usuario);
    }

    @Override
    public List<Seguidor> findSeguido(String idSeguidor) {
        Usuario usuario = Usuario.builder().username(idSeguidor).build();
        //return this.seguidorRepository.findSeguidorsBySeguidor(usuario);
        return  this.seguidorRepository.findSeguidorsByUsuario(usuario);
    }

    @Override
    public List<String> findSeguidorsBySeguidor(String username) {
        return this.seguidorRepository.findSeguidorsBySeguidor(username);

    }

// @Override
// public List<String> findUsuarioByIdSeguidor(String idSeguidor) {
//     return this.seguidorRepository.findUsuarioByIdSeguidor(idSeguidor);
// }



}
