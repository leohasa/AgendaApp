package com.g4ts.agendaapp.model;


import lombok.*;
import org.hibernate.annotations.ManyToAny;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Seguidores")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Seguidor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

            @OneToOne()
            @JoinColumn(name = "idUsuario")
            private Usuario usuario;

            @OneToOne()
            @JoinColumn(name = "idSeguidor")
            private Usuario seguidor;
      /*
    @ManyToOne()
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    @ManyToOne()
    @JoinColumn(name = "idUsuario")
    private Usuario seguidor;
*/
}
