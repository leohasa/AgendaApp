package com.g4ts.agendaapp.model;


import lombok.*;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Comentario")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne()
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    @OneToOne()
    @JoinColumn(name = "idPublicacion")
    private Publicacion publicacion;

    private LocalDate fecha;
    private String contenido;


}
