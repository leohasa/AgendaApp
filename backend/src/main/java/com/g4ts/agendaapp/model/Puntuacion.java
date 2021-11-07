package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Puntuacion")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Puntuacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer punto;

    @OneToOne()
    @JoinColumn(name = "idPublicacion")
    private Publicacion publicacion;

    @OneToOne()
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

}
