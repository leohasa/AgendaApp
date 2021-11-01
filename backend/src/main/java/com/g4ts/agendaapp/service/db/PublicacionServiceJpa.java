package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.PublicacionRepository;
import com.g4ts.agendaapp.repository.UsuarioRepository;
import com.g4ts.agendaapp.service.IPublicacionService;
import com.g4ts.agendaapp.service.IUsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PublicacionServiceJpa implements IPublicacionService {


    private PublicacionRepository publicacionRepository;

    public PublicacionServiceJpa(PublicacionRepository publicacionRepository){ this.publicacionRepository = publicacionRepository;}

    @Override
    public List<Publicacion> findAll() {
        return publicacionRepository.findAll();
    }

    @Override
    public Publicacion findByTitulo(String title) {
        return null;
    }

    @Override
    public void save(Publicacion publicacion) {
        publicacionRepository.save(publicacion);
    }

    @Override
    public void deleteById(String username) {

    }
}
