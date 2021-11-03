package com.g4ts.agendaapp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Plugin")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Plugin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
}
