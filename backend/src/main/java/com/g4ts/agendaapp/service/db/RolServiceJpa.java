package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Rol;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.RolRepository;
import com.g4ts.agendaapp.service.IRolService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolServiceJpa implements IRolService {

    private RolRepository rolRepository;

    public RolServiceJpa(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }

    @Override
    public List<Rol> findAllByuser(Usuario usuario) {
        return rolRepository.findAllByUsuario(usuario);
    }

    @Override
    public void save(Rol rol) {
        rolRepository.save(rol);
    }
}
