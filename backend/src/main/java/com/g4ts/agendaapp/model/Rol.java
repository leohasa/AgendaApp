package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Rol")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Rol {

    //comentario

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String tipo;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}
