package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Comentario;
import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.ComentarioRepository;

import com.g4ts.agendaapp.service.IComentarioService;
import com.g4ts.agendaapp.service.IPublicacionService;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ComentarioServiceJpa implements IComentarioService {


    private ComentarioRepository comentarioRepository;

    public ComentarioServiceJpa(ComentarioRepository comentarioRepository){ this.comentarioRepository = comentarioRepository;}

    @Override
    public List<Comentario> findComentarioByPublicacion( Publicacion publicacion){
        return this.comentarioRepository.findComentarioByPublicacionOrderByFechaDesc(publicacion);
    }

    @Override
    public List<Comentario> findAll() {
        return this.comentarioRepository.findAll();
    }

    @Override
    public Comentario findByTitulo(String title) {
        return null;
    }

    @Override
    public void save(Comentario comentario) {
        comentarioRepository.save(comentario);
    }

    @Override
    public void deleteById(String username) {

    }

    @Override
    public void deleteByPublicacion(Publicacion publicacion) {
        this.comentarioRepository.deleteAllByPublicacion(publicacion);
    }
}
