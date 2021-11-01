package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Actividad")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Actividad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String titulo;
    private String descripcion;
    private Short estado;

    @OneToOne
    @JoinColumn(name = "idProyecto")
    private Proyecto proyecto;

    @OneToOne
    @JoinColumn(name = "idCategoria")
    private Categoria categoria;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}
