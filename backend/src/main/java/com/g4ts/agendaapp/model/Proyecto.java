package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Proyecto")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Proyecto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaPrevistaFin;
    private String ubicacion;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}
