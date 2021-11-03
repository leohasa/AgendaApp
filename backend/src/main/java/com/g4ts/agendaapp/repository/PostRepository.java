package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Post;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findAllByUsuario(Usuario usuario);
}
