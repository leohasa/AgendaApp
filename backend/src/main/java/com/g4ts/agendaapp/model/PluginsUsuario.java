package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "PluginsUsuario")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class PluginsUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    @OneToOne
    @JoinColumn(name = "idPlugin")
    private Plugin plugin;
}
