import { NgModule } from '@angular/core';
import {ActividadService} from './service/actividad.service';
import {CategoriaService} from './service/categoria.service';
import { ComentarioServiceService } from './service/comentario-service.service';
import {DataService} from './service/data.service';
import {ForoService} from './service/foro.service';
import {NotificacionService} from './service/notificacion.service';
import { PluginService } from './service/plugin.service';
import { PluginsUserService } from './service/plugins-user.service';
import { PostService } from './service/post.service';
import {ProyectoService} from './service/proyecto.service';
import { PuntuacionService } from './service/puntuacion.service';
import {RecordatorioService} from './service/recordatorio.service';
import { SeguidorService } from './service/seguidor.service';
import {SolicitudService} from './service/solicitud.service';
import {UsuarioService} from './service/usuario.service';
import {AccessGuard} from './usuario/AccessGuard';

@NgModule({
    declarations: [],
    providers: [
        AccessGuard,
        ActividadService,
        CategoriaService,
        ComentarioServiceService,
        DataService,
        ForoService,
        NotificacionService,
        PluginService,
        PluginsUserService,
        PostService,
        ProyectoService,
        PuntuacionService,
        RecordatorioService,
        SeguidorService,
        SolicitudService,
        UsuarioService
    ]
})
export class CoreModule { }
