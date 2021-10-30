package com.g4ts.agendaapp.model;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Publicacion")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Publicacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //@OneToMany(cascade = CascadeType.ALL)//, mappedBy = "")
    @OneToOne()
   @JoinColumn(name = "idUsuario")
   private Usuario usuario;

    private String titulo;
    private LocalDate fechaPublicacion;
    private int puntuacion;


}
