package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Publicacion;
import com.g4ts.agendaapp.model.Puntuacion;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.PuntuacionRepository;
import com.g4ts.agendaapp.service.IPuntuacionService;
import org.springframework.stereotype.Service;

@Service
public class PuntuacionServiceJpa implements IPuntuacionService {

    private PuntuacionRepository puntuacionRepository;

    public PuntuacionServiceJpa(PuntuacionRepository puntuacionRepository){
        this.puntuacionRepository = puntuacionRepository;
    }
    @Override
    public Puntuacion getPuntuacionByUserAndPublicacion(String user, String id) {
        Usuario usuario = Usuario.builder().username(user).build();
        Publicacion publicacion = Publicacion.builder().id(Integer.parseInt(id)).build();
        return puntuacionRepository.findPuntuacionByUsuarioAndPublicacion(usuario,publicacion);
    }

    @Override
    public Boolean existsByUsuarioAndPublicacion(String username, String id) {
        Usuario usuario = Usuario.builder().username(username).build();
        Publicacion publicacion = Publicacion.builder().id(Integer.parseInt(id)).build();
        return puntuacionRepository.existsByUsuarioAndPublicacion(usuario,publicacion);
    }

    @Override
    public void save(Puntuacion puntuacion) {
        this.puntuacionRepository.save(puntuacion);
    }

}
