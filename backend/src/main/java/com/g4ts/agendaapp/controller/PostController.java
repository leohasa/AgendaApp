package com.g4ts.agendaapp.controller;

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

    @GetMapping("/listByUser/{username}")
    public List<Post> listByUser(@PathVariable String username) {
        return postService.findAllByUser(Usuario.builder().username(username).build());
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
