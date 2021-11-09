package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "SolicitudRolEditor")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class SolicitudRolEditor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
    private String contenido;
    private LocalDate fecha;
    private Short estado;
}
