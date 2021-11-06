package com.g4ts.agendaapp.repository;

import com.g4ts.agendaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    @Query("SELECT u.username FROM Usuario u WHERE u.username LIKE CONCAT('%',:username,'%')")
    List<String> findUsersWithPartOfName(@Param("username") String username);
}
