package com.g4ts.agendaapp.service;

import com.g4ts.agendaapp.model.Post;
import com.g4ts.agendaapp.model.Usuario;

import java.util.List;

public interface IPostService {
    List<Post> findAll();
    Post findById(Integer id);
    void save(Post post);
    void delteById(Integer id);

    List<Post> findAllByUser(Usuario usuario);
}
