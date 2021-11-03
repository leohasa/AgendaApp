package com.g4ts.agendaapp.controller;

import com.g4ts.agendaapp.model.Plugin;
import com.g4ts.agendaapp.model.Post;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.service.IPostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/post")
public class PostController {

    private IPostService postService;

    public PostController(IPostService postService) {
        this.postService = postService;
    }

    @GetMapping("/list")
    public List<Post> list() {
        return postService.findAll();
    }

    @GetMapping("/listByUserAndPlugin/{id}/{username}")
    public List<Post> listByUser(
           @PathVariable Integer id, @PathVariable String username) {
        Usuario usuario = Usuario.builder().username(username).build();
        Plugin plugin = Plugin.builder().id(id).build();
        return postService.findAllByUserAndPlugin(usuario, plugin);
    }

    @PostMapping("/add")
    public void save(@RequestBody Post post) {
        postService.save(post);
    }

    @GetMapping("/get/{id}")
    public Post get(@PathVariable Integer id) {
        return postService.findById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody Post post) {
        postService.save(post);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        postService.delteById(id);
    }
}
