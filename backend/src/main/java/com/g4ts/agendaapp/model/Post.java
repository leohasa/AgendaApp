package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Post")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String contenido;
    private LocalDate fecha;

    @OneToOne
    @JoinColumn(name = "idPlugin")
    private Plugin plugin;

    @OneToOne
    @JoinColumn(name = "idEditor")
    private Usuario usuario;
}
