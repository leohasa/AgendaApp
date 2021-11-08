package com.g4ts.agendaapp.repository;


import com.g4ts.agendaapp.model.Seguidor;
import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SeguidorRepository extends JpaRepository<Seguidor, Integer> {
    //@Query("SELECT u.username FROM Usuario u WHERE u.username LIKE CONCAT('%',:username,'%')")
    List<Seguidor> findByUsuario( Usuario usuario);

    @Query("SELECT s.usuario.username FROM Seguidor AS s WHERE s.seguidor.username = :username")
    List<String> findSeguidorsBySeguidor(@Param("username") String username);
    List<Seguidor> findSeguidorsByUsuario(Usuario usuario);
    List<Seguidor> findSeguidorsBySeguidor(Usuario usuario);

}
