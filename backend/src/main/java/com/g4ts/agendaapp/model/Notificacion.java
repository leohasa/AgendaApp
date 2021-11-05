package com.g4ts.agendaapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Notificacion")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String descripcion;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:s")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:s")
    private LocalDateTime fechaHora;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

}
