package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Plugin;
import com.g4ts.agendaapp.model.Post;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.PostRepository;
import com.g4ts.agendaapp.service.IPostService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceJpa implements IPostService {

    private PostRepository postRepository;

    public PostServiceJpa(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post findById(Integer id) {
        Optional<Post> oPost = postRepository.findById(id);
        return oPost.isPresent() ? oPost.get() : null;
    }

    @Override
    public void save(Post post) {
        postRepository.save(post);
    }

    @Override
    public void delteById(Integer id) {
        postRepository.deleteById(id);
    }

    @Override
    public List<Post> findAllByUserAndPlugin(Usuario usuario, Plugin plugin) {
        return postRepository.findAllByUsuarioAndPlugin(usuario, plugin);
    }
}
