package com.g4ts.agendaapp.service.db;

import com.g4ts.agendaapp.model.Proyecto;
import com.g4ts.agendaapp.model.Recordatorio;
import com.g4ts.agendaapp.model.Usuario;
import com.g4ts.agendaapp.repository.RecordatorioRepository;
import com.g4ts.agendaapp.service.IRecordatorioService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RecordatorioServiceJpa implements IRecordatorioService {

    private RecordatorioRepository  recordatorioRepository;

    public RecordatorioServiceJpa(RecordatorioRepository recordatorioRepository) {
        this.recordatorioRepository = recordatorioRepository;
    }

    @Override
    public List<Recordatorio> findAll() {
        return this.recordatorioRepository.findAll();
    }

    @Override
    public Recordatorio findById(Integer id) {
        Optional<Recordatorio> optionalRecordatorio = this.recordatorioRepository.findById(id);
        if(optionalRecordatorio.isPresent())return optionalRecordatorio.get();
        return null;
    }

    @Override
    public void save(Recordatorio recordatorio) {
        this.recordatorioRepository.save(recordatorio);
    }

    @Override
    public void deleteById(Integer id) {
        this.recordatorioRepository.deleteById(id);
    }

    @Override
    public List<Recordatorio> findAllByUsuario(Usuario usuario) {
        return this.recordatorioRepository.findAllByUsuario(usuario);
    }

    @Override
    public List<Recordatorio> findAllByUsuarioYFecha(Usuario usuario, LocalDateTime inicio, LocalDateTime fin) {
        return this.recordatorioRepository.findAllByUsuarioAndFechaBetween(usuario,inicio,fin);
    }
}
