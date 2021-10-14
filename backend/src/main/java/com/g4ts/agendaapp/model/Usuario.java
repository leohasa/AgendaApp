package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Usuario")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

    @Id
    private Integer username;
    private String password;
    private String nombre;
    private LocalDate fechaNacimiento;
    private String nacionalidad;
    private String ocupacion;
    private String descripcion;
}
