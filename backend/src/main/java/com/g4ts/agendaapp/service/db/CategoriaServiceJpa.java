package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Categoria;
import com.g4ts.agendaapp.repository.CategoriaRepository;
import com.g4ts.agendaapp.service.ICategoriaService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServiceJpa implements ICategoriaService {

    private CategoriaRepository categoriaRepository;

    public CategoriaServiceJpa(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public List<Categoria> findAll() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria findById(Integer id) {
        Optional<Categoria> optionalCategoria = categoriaRepository.findById(id);
        if (optionalCategoria.isPresent()) return optionalCategoria.get();
        return null;
    }

    @Override
    public void save(Categoria categoria) {
        categoriaRepository.save(categoria);
    }

    @Override
    public void deleteById(Integer id) {
        categoriaRepository.deleteById(id);
    }
}
