package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Categoria")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}
