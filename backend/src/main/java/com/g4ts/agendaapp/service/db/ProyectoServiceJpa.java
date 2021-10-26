package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.ProyectoRepository;
import com.g4ts.agendaapp.service.IProyectoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoServiceJpa implements IProyectoService {

    private ProyectoRepository proyectoRepository;

    public ProyectoServiceJpa(ProyectoRepository proyectoRepository) {
        this.proyectoRepository = proyectoRepository;
    }

    @Override
    public List<Proyecto> findAll() {
        return proyectoRepository.findAll();
    }

    @Override
    public Proyecto findById(Integer id) {
        Optional<Proyecto> optionalProyecto = proyectoRepository.findById(id);
        if (optionalProyecto.isPresent()) return optionalProyecto.get();
        return null;
    }

    @Override
    public void save(Proyecto proyecto) {
        proyectoRepository.save(proyecto);
    }

    @Override
    public void deleteById(Integer id) {
        proyectoRepository.deleteById(id);
    }

    @Override
    public List<Proyecto> findAllByUsuario(Usuario usuario) {
        return proyectoRepository.findAllByUsuario(usuario);
    }
}
